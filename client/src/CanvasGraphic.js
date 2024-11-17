import React, { useEffect, useState } from 'react';
import bgPurple from './assets/2023-purple.png';
import bgLavender from './assets/2023-lavender.png';
import bgYellow from './assets/2023-yellow.png';
import bgRed from './assets/2023-red.png';
import bgBlack from './assets/2023-black.png';
import bgGreen from './assets/2023-green.png';

const FONT_FAMILY = 'Circular Spotify';
const purple = 'rgb(65,0,118)';
const lavender = 'rgb(176, 178, 255)';
const yellow = 'rgb(218, 181, 5)';
const red = 'rgb(254, 91, 72)';
const dark = 'rgb(1,1,1)';
const green = 'rgb(22,209,166)';
const white = 'rgb(255,255,255)';
const black = 'rgba(0,0,0,0.9)';

const colorPalettes = [
	{
		textColor: black,
		bg: bgLavender,
		color: lavender
	},
	{
		textColor: black,
		bg: bgYellow,
		color: yellow
	},
	{
		textColor: black,
		bg: bgRed,
		color: red,
	},
	{
		textColor: white,
		bg: bgBlack,
		color: dark,
	},
	{
		textColor: black,
		bg: bgGreen,
		color: green,
	},
	{
		textColor: white,
		bg: bgPurple,
		color: purple,
	}
];

function CanvasGraphic(props) {
	const [palette, setPalette] = useState(0);

	const getLines = (ctx, text, maxWidth) => {
		var words = text.split(" ");
		var lines = [];
		var currentLine = words[0];

		for (var i = 1; i < words.length; i++) {
			var word = words[i];
			var width = ctx.measureText(currentLine + " " + word).width;
			if (width < maxWidth) {
				currentLine += " " + word;
			} else {
				lines.push(currentLine);
				currentLine = word;
			}
		}
		lines.push(currentLine);
		return lines;
	}

	const shortenString = (ctx, text, maxWidth) => {
		let metrics = ctx.measureText(text);
		let width = metrics.width;
		if (width > maxWidth) {
			let ratio = width / text.length;
			let removeCount = Math.ceil((width - maxWidth) / ratio);
			let index = text.indexOf('(');
			if (index > 0) return text.substring(0, index);
			return text.substring(0, text.length - removeCount).concat('...');
		} else {
			return text;
		}
	}

	const drawStoryCanvas = async () => {
		let ratio = window.devicePixelRatio;
		const w = 450;
		const h = 800;
		const cv = document.getElementById("story");
		cv.width = w * ratio;
		cv.height = h * ratio;
		// cv.style.width = w + "px";
		// cv.style.height = h + "px";
		const ctx = cv.getContext("2d");
		ctx.scale(ratio, ratio);

		const startingHeight = 108;
		await drawImage(ctx, props.data.artists[0].images[1].url, 102, startingHeight - 22, 247, 247);
		await drawImage(ctx, colorPalettes[palette].bg, 0, 0, w, h); //background

		ctx.fillStyle = colorPalettes[palette].textColor;
		ctx.font = `20px '${FONT_FAMILY}'`;

		const maxWidth = 140;
		for (let i = 0; i < 5; i++) {
			if (props.data.artists[i] && Object.keys(props.data.artists[i]).length != 0) {
				let name = props.data.artists[i].name;
				name = shortenString(ctx, name, maxWidth);
				writeText(ctx, name, 55, startingHeight + 385 + i * 27.5);
			}
		}

		ctx.font = `20px '${FONT_FAMILY}'`;
		for (let i = 0; i < 5; i++) {
			if (props.data.tracks[i]) {
				let name = props.data.tracks[i].name;
				name = shortenString(ctx, name, maxWidth);
				writeText(ctx, name, 260, startingHeight + 385 + i * 27.5);
			}
		}

		if (props.data.genre) {
			let g = props.data.genre;
			let topGenre = g.charAt(0).toUpperCase() + g.slice(1);
			const lines = getLines(ctx, topGenre, maxWidth);
			ctx.font = `30px '${FONT_FAMILY}'`;
			for (let i = 0; i < 2; i++) {
				if (i > lines.length - 1) break;
				if (i === 1) {
					writeText(ctx, shortenString(ctx, lines[i], maxWidth), 240, startingHeight + (580 + i * 42));
				} else {
					writeText(ctx, lines[i], 240, startingHeight + (580 + i * 42));
				}
			}
		}

		if (props.data.time) {
			let time = props.data.time;
			ctx.font = `30px '${FONT_FAMILY}'`;
			writeText(ctx, time, 30, startingHeight + 580);
		}
	}

	const writeText = (ctx, words, x, y) => {
		ctx.fillText(words, x, y);
	}

	const drawImage = (ctx, src, x, y, width, height) => {
		return new Promise((resolve, reject) => {
			const image = new Image();
			image.crossOrigin = 'Anonymous';
			image.src = src;
			image.onload = () => {
				ctx.drawImage(image, x, y, width, height);
				resolve();
			}
		});
	}

	const dlCanvas = () => {
		let canvas = document.getElementById("story");
		let dt = canvas.toDataURL('image/png');
		/* Change MIME type to trick the browser to downlaod the file instead of displaying it */
		dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');

		/* In addition to <a>'s "download" attribute, you can define HTTP-style headers */
		dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');
		var link = document.createElement('a');
		link.download = 'diy-wrapped.png';
		link.href = dt;
		link.click();
	}

	useEffect(() => {
		if (props.data && props.done) {
			drawStoryCanvas();
		}
	}, [props.done, palette]);

	return (
		<div className='canvas-graphic-wrapper'>
			{props.done ?
				<>
					<div className='graphics-wrapper'>
						<canvas id='story' width='450' height='800'></canvas>
					</div>
					<div className="color-selector">
						{colorPalettes.map((pal, index) => {
							return <div className={"color" + (index === palette ? " selected" : "")} style={{ background: pal.color }} onClick={() => setPalette(index)}></div>;
						})}
					</div>
					<button onClick={dlCanvas}>Download</button>
				</>
				:
				<></>
			}
		</div>
	)
}

export default CanvasGraphic;

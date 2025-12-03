import React, { useEffect, useState } from 'react';
import bgPurple from './assets/2023-purple.png';
import bgLavender from './assets/2023-lavender.png';
import bgYellow from './assets/2023-yellow.png';
import bgRed from './assets/2023-red.png';
import bgBlack from './assets/2023-black.png';
import bgGreen from './assets/2023-green.png';
import bgYellowBlue from './assets/yellow-blue.png';
import bgBlueRed from './assets/blue-red.png';
import bgRedGreen from './assets/red-green.png';
import bgBlackRed from './assets/black-red.png';
import bgBlackGreen from './assets/black-green.png';
import bgBlackBlue from './assets/black-blue.png';
import thumbnailBlackBlue from './assets/black-blue-thumbnail.png';
import thumbnailBlackRed from './assets/black-red-thumbnail.png';
import thumbnailBlackGreen from './assets/black-green-thumbnail.png';
import bgWhiteRed from './assets/2025-white-red.png';
import bgWhiteYellow from './assets/2025-white-yellow.png';
import bgBlackPurple from './assets/2025-black-purple.png';
import bgBlackGreen2025 from './assets/2025-black-green.png';
import thumbnailBlackPurple from './assets/black-purple-thumbnail.png';
import thumbnailBlackGreen2025 from './assets/black-green-thumbnail-2025.png';
import thumbnailWhiteRed from './assets/white-red-thumbnail.png';
import thumbnailWhiteYellow from './assets/white-yellow-thumbnail.png';
import template from './assets/template.JPG';

const FONT_FAMILY = 'Circular Spotify';
const purple = 'rgb(65,0,118)';
const lavender = 'rgb(176, 178, 255)';
const yellow = 'rgb(218, 181, 5)';
const red = 'rgb(254, 91, 72)';
const dark = 'rgb(1,1,1)';
const green = 'rgb(22,209,166)';
const white = 'rgb(255,255,255)';
const black = 'rgba(0,0,0,1)';

const yellow2024 = 'rgb(254, 241, 2)';
const blue2024 = 'rgb(0,173,241)';
const red2024 = 'rgb(233,27,3)';

const black2025 = '#272727';
const white2025 = '#e4e5df';
const whiteBg2025 = '#eeefea';

let timer;

const colorPalettes2025 = [
	{
		textColor: black2025,
		bg: bgWhiteRed,
		color: whiteBg2025,
		thumbnail: thumbnailWhiteRed
	},
	{
		textColor: black2025,
		bg: bgWhiteYellow,
		color: whiteBg2025,
		thumbnail: thumbnailWhiteYellow
	},
	{
		textColor: white2025,
		bg: bgBlackPurple,
		color: black2025,
		thumbnail: thumbnailBlackPurple
	},
	{
		textColor: white2025,
		bg: bgBlackGreen2025,
		color: black2025,
		thumbnail: thumbnailBlackGreen2025
	},
];

const colorPalettes2024 = [
	{
		textColor: white,
		bg: bgBlackGreen,
		color: black,
		thumbnail: thumbnailBlackGreen
	},
	{
		textColor: white,
		bg: bgBlackBlue,
		color: black,
		thumbnail: thumbnailBlackBlue
	},
	{
		textColor: white,
		bg: bgBlackRed,
		color: black,
		thumbnail: thumbnailBlackRed
	},
	{
		textColor: black,
		bg: bgYellowBlue,
		color: yellow2024
	},
	{
		textColor: black,
		bg: bgBlueRed,
		color: blue2024
	},
	{
		textColor: black,
		bg: bgRedGreen,
		color: red2024
	},
];

const colorPalettes2023 = [
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

		if (ctx.measureText(currentLine).width > maxWidth) {
			let ratio = ctx.measureText(currentLine).width / text.length;
			let removeCount = Math.ceil((ctx.measureText(currentLine).width - maxWidth) / ratio);
			lines.push(text.substring(0, text.length - removeCount));
			currentLine = text.substring(text.length - removeCount);
		}

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
		await loadFonts();
		let ratio = window.devicePixelRatio;
		const w = 450;
		const h = 800;
		const cv = document.getElementById("story");
		cv.width = w * ratio;
		cv.height = h * ratio;
		// cv.style.width = w + "px";
		// cv.style.height = h + "px";
		const ctx = cv.getContext("2d");
		ctx.reset();
		ctx.scale(ratio, ratio);

		ctx.clearRect(0, 0, w, h);

		// await drawImage(ctx, template, 0, 0, w, h);

		const startingHeight = 61;
		if (props.data?.artists?.[0]?.images) {
			await drawImage(ctx, props.data.artists[0].images[1].url, 91, startingHeight - 30, 318, 318);
		}
		await drawImage(ctx, colorPalettes2025[palette].bg, 0, 0, w, h); //background
		

		const maxWidth = 170;
		const fontSize = 20;
		const lineHeight = 27.5;
		ctx.fillStyle = colorPalettes2025[palette].textColor;
		ctx.font = `${fontSize}px '${FONT_FAMILY}'`;
		ctx.letterSpacing = "0.3px";
		ctx.scale(0.948, 1);

		for (let i = 0; i < 5; i++) {
			// ctx.rect(55, startingHeight + 385, 170, 130);
			// ctx.stroke();
			if (props.data?.artists && props.data?.artists?.[i] && Object.keys(props.data.artists[i]).length != 0) {
				let name = props.data.artists[i].name;
				name = shortenString(ctx, name, maxWidth);
				writeText(ctx, name, 55, startingHeight + 385 + i * lineHeight);

			}
		}

		ctx.font = `${fontSize}px '${FONT_FAMILY}'`;
		for (let i = 0; i < 5; i++) {
			if (props.data?.tracks?.[i]) {
				let name = props.data.tracks[i].name;
				name = shortenString(ctx, name, maxWidth);
				writeText(ctx, name, 268, startingHeight + 385 + i * lineHeight);
			}
		}

		const genreMaxWidth = 130;
		if (props.data.genre) {
			let g = props.data.genre;
			let topGenre = g.charAt(0).toUpperCase() + g.slice(1);
			const lines = getLines(ctx, topGenre, genreMaxWidth);
			ctx.font = `36px 'Spotify Mix Black'`;
			ctx.letterSpacing = "-0.5px";
			for (let i = 0; i < 2; i++) {
				if (i > lines.length - 1) break;
				if (i === 1) {
					writeText(ctx, shortenString(ctx, lines[i], genreMaxWidth), 247, startingHeight + (587 + i * 36));
				} else {
					writeText(ctx, lines[i], 247, startingHeight + (587 + i * 36));
				}
			}
		}

		if (props.data.time) {
			let time = props.data.time;
			ctx.font = `36px 'Spotify Mix Black'`;
			ctx.letterSpacing = "0.5px";
			writeText(ctx, time, 34, startingHeight + 587);
		}

		const creditHeight = 687;
		if (!props.data.credit) {
			ctx.fillStyle = colorPalettes2025[palette].color;
			ctx.rect(180, startingHeight + creditHeight, 270, 30);
			ctx.fill();
			ctx.fillStyle = colorPalettes2025[palette].textColor;
			ctx.font = `20px ${FONT_FAMILY}`;
			ctx.letterSpacing = "0px";
			writeText(ctx, "DIYWRAPPED.COM", 255, startingHeight + creditHeight + 21);
		}

		ctx.resetTransform();
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

	const loadFonts = async () => {
		const font1 = new FontFace("Spotify Mix Black", "url('SpotifyMix-ExtraBold.ttf')", {
			style: "normal",
			weight: "300",
		});
		const font2 = new FontFace("Circular Spotify", "url('SpotifyMix-Bold.ttf')", {
			style: "normal",
			weight: "400",
			stretch: "50% 200%"
		});
		// wait for font to be loaded
		await font1.load();
		await font2.load();
		// add font to document
		document.fonts.add(font1);
		document.fonts.add(font2);
	}

	const debouncedDraw = () => {
		if (!timer) {
			timer = setTimeout(() => {
				drawStoryCanvas();
				timer = null;
			}, 150);
		}
	}

	useEffect(() => {
		debouncedDraw();
	}, [props.done, props.data, palette]);

	return (
		<div className='canvas-graphic-wrapper'>
			<div className="scrollable">
				<div className='graphics-wrapper'>
					<canvas id='story' width='450' height='800'></canvas>
				</div>
				<div className="color-selector">
					{colorPalettes2025.map((pal, index) => {
						return (
							<div
								className={"color" + (index === palette ? " selected" : "")}
								style={{ background: pal.color }}
								onClick={() => setPalette(index)}
							>
								{
									pal.thumbnail ?
										<img src={pal.thumbnail} />
										:
										<></>
								}
							</div>);
					})}
				</div>
				<button onClick={dlCanvas}>Download</button>
			</div>
		</div>
	)
}

export default CanvasGraphic;

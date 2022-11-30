import React, {useEffect, useState} from 'react';
import Vibrant from 'node-vibrant';
import gradient1 from './gradient1.jpg';
import gradient2 from './gradient2.jpg';
import gradient3 from './gradient3.jpg';
import gradient4 from './gradient4.jpg';
import gradient5 from './gradient5.png';
import spotify1 from './spotify1.JPG';
import spotify2 from './spotify2.JPG';
import spotify3 from './spotify3.JPG';

function CanvasGraphic(props) {
  const [appState, setAppState] = useState({
    palette: {}
  });

  const shortenString = (text, remove) => {
  	let index = text.indexOf('(');
  	if(index > 0) return text.substring(0, index);
		return text.substring(0, text.length-remove).concat('..');
	}

  const getColor = () => {
  	let src = '';
  	if(props.data.tracks) {
			src = props.data.artists[0].images[0].url || '';
		}
  	Vibrant.from(src).getPalette(function(err, palette) {
  		console.log(palette);
			if(palette) {
				setAppState({palette: palette});
				//drawSquareCanvas(palette);
				drawSongsCanvas();
				drawStoryCanvas();
				drawArtistsCanvas();
			}
		});
  }

  const drawStoryCanvas = async () => {
  	let ratio = window.devicePixelRatio;
  	console.log(ratio);
  	const w = 450;
  	const h = 800;
  	const cv = document.getElementById("story");
  	cv.width = w * ratio;
    cv.height = h * ratio;
    // cv.style.width = w + "px";
    // cv.style.height = h + "px";
  	const ctx = cv.getContext("2d");
  	ctx.scale(ratio, ratio);

  	//ctx.fillStyle = 'rgb(0,0,0)';
  	//ctx.fillRect(0, 0, c.width, c.height);
  	await drawImage(ctx, gradient4, 0, 0, cv.width, cv.height);
  	const startingHeight = 120;

  	const blue = 'rgb(0,0,0)';
  	const purple = 'rgb(177,197,252)';
  	const orange = 'rgb(247,210,201)';

  	ctx.fillStyle = blue;
  	ctx.fillRect(50, 75, 350, 650);
  	await drawImage(ctx, gradient3, 75, startingHeight + 25, 300, 200);
  	await drawImage(ctx, props.data.artists[0].images[1].url, 100, startingHeight, 250, 250);

  	ctx.fillStyle = 'rgb(255,255,255)';
  	ctx.font = "16px 'Circular'";
  	ctx.fillText('TOP ARTISTS', 70, startingHeight + 300);
  	ctx.font = "14px 'Circular'";
  	for(let i = 0; i < 5; i++) {
  		if(props.data.artists[i] && Object.keys(props.data.artists[i]).length != 0) {
  			let name = props.data.artists[i].name;
  			let metrics = ctx.measureText(name);
  			let width = metrics.width;
  			if(width > 200) {
  				let ratio = width/name.length;
  				let toRemove = Math.ceil((width-200)/ratio);
  				name = shortenString(name, toRemove+1);
  			}
  			ctx.fillStyle = purple;
  			writeText(ctx, name, 85, startingHeight + 325 + i * 18);
  			ctx.fillStyle = 'rgb(255,255,255)';
  			writeText(ctx, i+1, 70, startingHeight + 325 + i * 18);
  		}
  	}

  	ctx.font = "16px 'Circular'";
  	ctx.fillText('TOP SONGS', 230, startingHeight + 300);
  	ctx.font = "14px 'Circular'";
  	for(let i = 0; i < 5; i++) {
  		if(props.data.tracks[i]) {
  			let name = props.data.tracks[i].name;
  			let metrics = ctx.measureText(name);
  			let width = metrics.width;
  			if(width > 100) {
  				let ratio = width/name.length;
  				let toRemove = Math.ceil((width-100)/ratio);
  				name = shortenString(name, toRemove+1);
  			}
  			ctx.fillStyle = purple;
  			writeText(ctx, name, 245, startingHeight + 325 + i * 18);
  			ctx.fillStyle = 'rgb(255,255,255)';
  			writeText(ctx, i+1, 230, startingHeight + 325 + i * 18);
  		}
  	}

		ctx.fillStyle = 'rgb(255,255,255)';
  	ctx.font = "16px 'Circular'";
  	ctx.fillText('TOP GENRE', 70, startingHeight + 470);
  	ctx.fillStyle = purple;
  	ctx.font = "32px 'Circular'";
  	if(props.genre) {
  		let g = props.genre;
  		let topGenre = g.charAt(0).toUpperCase() + g.slice(1);
  		writeText(ctx, topGenre, 70, startingHeight + 510);
  	}

  	const footerHeight = 50;
  	ctx.fillStyle = orange;
  	ctx.fillRect(50, 625 + footerHeight, 350, footerHeight);
  	ctx.fillStyle = blue;
  	ctx.font = "18px 'Circular'";
  	ctx.textAlign = 'center';
  	writeText(ctx, 'bit.ly/quarantine-wrapped', 225, startingHeight + 550 + footerHeight/2 + 8);
  }

  const drawArtistsCanvas = async () => {
  	let ratio = window.devicePixelRatio;
  	const w = 450;
  	const h = 800;
  	const c = document.getElementById("artists");
  	c.width = w * ratio;
    c.height = h * ratio;
  	const ctx = c.getContext("2d");
  	ctx.scale(ratio, ratio);

  	const purple = 'rgb(229,187,241)';
  	const yellow = 'rgb(239,210,10)';
  	const pink = 'rgb(226,28,164)';

  	ctx.fillStyle = 'rgb(255,255,255)';
  	ctx.fillRect(0, 0, c.width, c.height);

	  await drawImage(ctx, gradient5, 0, 0, 450, 800);

	  ctx.fillStyle = pink;
  	ctx.fillRect(50, 75, 350, 650);

  	ctx.font = "32px 'Circular'";
  	ctx.fillStyle = 'rgb(255,255,255)';
  	ctx.textAlign = 'center';
  	writeText(ctx, 'My Top Artists', 225, 150);

  	const startingHeight = 180;
  	const startX = 85;
  	ctx.textAlign = 'left';
  	for(let i = 0; i < 5; i++) {
  		if(props.data.artists[i]) {
  			await drawImage(ctx, props.data.artists[i].images[1].url, startX, startingHeight + i * 100, 90, 90);
  			ctx.font = "18px 'Circular'";
  			ctx.fillStyle = yellow;
  			writeText(ctx, "#"+(i+1), startX + 105, startingHeight + 35 + i*100);
  			ctx.fillStyle = 'rgb(255,255,255)';
  			let name = props.data.artists[i].name;
  			let metrics = ctx.measureText(name);
  			let width = metrics.width;
  			
  			const maxWidth = 180;
  			if(width > maxWidth) {
  				let ratio = width/name.length;
  				let toRemove = Math.ceil((width-maxWidth)/ratio);
  				name = shortenString(name, toRemove+1);
  			}
  			ctx.font = "22px 'Circular'";
  			writeText(ctx, name, startX + 105, startingHeight + 65 + i * 100);
  		}
  	}
  }

  const drawSongsCanvas = async () => {
  	let ratio = window.devicePixelRatio;
  	const w = 450;
  	const h = 800;
  	const c = document.getElementById("songs");
  	c.width = w * ratio;
    c.height = h * ratio;
    // c.style.width = w + "px";
    // c.style.height = h + "px";
  	const ctx = c.getContext("2d");
  	ctx.scale(ratio, ratio);

  	const orange = 'rgb(226,139,5)';
  	const yellow = 'rgb(228,203,46)';
  	const darkOrange = 'rgb(205,38,2)';
  	const blue = 'rgb(0,196,230)';

  	ctx.fillStyle = 'rgb(255,255,255)';
  	ctx.fillRect(0, 0, c.width, c.height);

	  await drawImage(ctx, gradient1, 0, 0, 450, 800);

	  ctx.fillStyle = yellow;
  	ctx.fillRect(50, 75, 350, 650);

  	ctx.font = "32px 'Circular'";
  	ctx.fillStyle = 'rgb(0,0,0)';
  	ctx.textAlign = 'center';
  	writeText(ctx, 'My Top Songs', 225, 150);

  	const startingHeight = 180;
  	const startX = 85;
  	ctx.textAlign = 'left';
  	for(let i = 0; i < 5; i++) {
  		if(props.data.tracks[i]) {
  			await drawImage(ctx, props.data.tracks[i].album.images[1].url, startX, startingHeight + i * 100, 90, 90);
  			ctx.font = "18px 'Circular'";
  			ctx.fillStyle = blue;
  			writeText(ctx, "#"+(i+1), startX + 105, startingHeight + 30 + i*100);
  			ctx.fillStyle = 'rgb(0,0,0)';
  			let name = props.data.tracks[i].name;
  			let metrics = ctx.measureText(name);
  			let width = metrics.width;
  			
  			const maxWidth = 180;
  			if(width > maxWidth) {
  				let ratio = width/name.length;
  				let toRemove = Math.ceil((width-maxWidth)/ratio);
  				name = shortenString(name, toRemove+1);
  			}
  			writeText(ctx, name, startX + 105, startingHeight + 52 + i * 100);

  			ctx.font = "16px 'Circular'";
  			ctx.fillStyle = darkOrange;
  			writeText(ctx, props.data.tracks[i].artists[0].name, startX + 105, startingHeight + 75 + i * 100);
  		}
  	}
  }

  const drawSquareCanvas = (palette) => {
  	let c = document.getElementById("downloadable");
  	c.width = c.clientWidth * 2
  	c.height = c.clientHeight * 2
  	let ctx = c.getContext("2d");
  	if(window.innerWidth < 600) {
  		ctx.scale(1.4, 1.4);
  	} else {
  		ctx.scale(2, 2);
  	}

  	if(palette.DarkMuted) {
  		const bgColor = palette.DarkMuted.getRgb();
  		ctx.fillStyle = 'rgb(' + bgColor[0] + ',' + bgColor[1] + ',' + bgColor[2] + ')';
  	} else {
  		ctx.fillStyle = 'rgb(0,0,0)';
  	}
  	ctx.fillRect(0, 0, c.width, c.height);

  	ctx.fillStyle = 'rgb(255,255,255)';
  	ctx.font = "16px 'Circular Spotify'";

  	if(palette.Vibrant) {
  		const bgColor = palette.Vibrant.getRgb();
  		ctx.fillStyle = 'rgb(' + bgColor[0] + ',' + bgColor[1] + ',' + bgColor[2] + ')';
  	} else {
  		ctx.fillStyle = 'rgb(226,28,164)';
  	}
  	ctx.fillText('QUARANTINE WRAPPED', 270, 50);
  	ctx.fillRect(30, 43, 230, 3);

  	const image = new Image();
  	image.crossOrigin = 'Anonymous';
  	if(props.data.tracks) {
  		image.src = props.data.artists[0].images[0].url || '';
  	}

  	image.onload = () => {
  		if(image.naturalWidth < image.naturalHeight) {
  			const diff = (image.naturalHeight - image.naturalWidth) / 2;
  			ctx.drawImage(image, 0, diff, image.naturalWidth, image.naturalWidth, 290, 90, 140, 140);
  			ctx.drawImage(image, 0, diff, image.naturalWidth, image.naturalWidth, 280, 105, 160, 160);
  			ctx.drawImage(image, 0, diff, image.naturalWidth, image.naturalWidth, 265, 125, 190, 190);
  			ctx.drawImage(image, 0, diff, image.naturalWidth, image.naturalWidth, 250, 150, 220, 220);
  		} else if(image.naturalWidth > image.naturalHeight) {
  			const diff = (image.naturalWidth - image.naturalHeight) / 2;
  			ctx.drawImage(image, diff, 0, image.naturalHeight, image.naturalHeight, 290, 90, 140, 140);
  			ctx.drawImage(image, diff, 0, image.naturalHeight, image.naturalHeight, 280, 105, 160, 160);
  			ctx.drawImage(image, diff, 0, image.naturalHeight, image.naturalHeight, 265, 125, 190, 190);
  			ctx.drawImage(image, diff, 0, image.naturalHeight, image.naturalHeight, 250, 150, 220, 220);
  		} else {
  			ctx.drawImage(image, 290, 90, 140, 140);
  			ctx.drawImage(image, 280, 105, 160, 160);
  			ctx.drawImage(image, 265, 125, 190, 190);
  			ctx.drawImage(image, 250, 150, 220, 220);
  		}
  	};

  	if(palette.LightVibrant) {
  		const bgColor = palette.LightVibrant.getRgb();
  		ctx.fillStyle = 'rgb(' + bgColor[0] + ',' + bgColor[1] + ',' + bgColor[2] + ')';
  	} else {
  		ctx.fillStyle = 'rgb(209,255,106)';
  	}

  	ctx.font = "18px 'Circular Spotify'";
  	ctx.fillText('TOP ARTISTS', 30, 106);
  	ctx.fillStyle = 'rgb(255,255,255)';
  	ctx.font = "20px 'Circular Spotify'";

  	for(let i = 0; i < 5; i++) {
  		if(props.data.artists[i] && Object.keys(props.data.artists[i]).length != 0) {
  			let name = props.data.artists[i].name;
  			let metrics = ctx.measureText(name);
  			let width = metrics.width;
  			if(width > 200) {
  				let ratio = width/name.length;
  				let toRemove = Math.ceil((width-200)/ratio);
  				name = shortenString(name, toRemove+1);
  			}
  			writeText(ctx, name, 30, 133 + i * 28);
  		}
  	}

  	if(palette.LightVibrant) {
  		const bgColor = palette.LightVibrant.getRgb();
  		ctx.fillStyle = 'rgb(' + bgColor[0] + ',' + bgColor[1] + ',' + bgColor[2] + ')';
  	} else {
  		ctx.fillStyle = 'rgb(209,255,106)';
  	}

  	ctx.font = "18px 'Circular Spotify'";
  	writeText(ctx, 'TOP SONGS', 30, 320);
  	ctx.fillStyle = 'rgb(255,255,255)';
  	ctx.font = "20px 'Circular Spotify'";

  	for(let i = 0; i < 5; i++) {
  		if(props.data.tracks[i]) {
  			let name = props.data.tracks[i].name;
  			let metrics = ctx.measureText(name);
  			let width = metrics.width;
  			if(width > 200) {
  				let ratio = width/name.length;
  				let toRemove = Math.ceil((width-200)/ratio);
  				name = shortenString(name, toRemove+1);
  			}
  			writeText(ctx, name, 30, 348 + i * 28);
  		}
  	}

  	if(palette.LightVibrant) {
  		const bgColor = palette.LightVibrant.getRgb();
  		ctx.fillStyle = 'rgb(' + bgColor[0] + ',' + bgColor[1] + ',' + bgColor[2] + ')';
  	} else {
  		ctx.fillStyle = 'rgb(209,255,106)';
  	}
  	ctx.font = "18px 'Circular Spotify'";
  	writeText(ctx, 'TOP GENRE', 250, 430);
  	ctx.fillStyle = 'rgb(255,255,255)';
  	ctx.font = "24px 'Circular Spotify'";
  	if(props.genre) {
  		let g = props.genre;
  		let topGenre = g.charAt(0).toUpperCase() + g.slice(1);
  		writeText(ctx, topGenre, 250, 460);
  	}

  	if(palette.DarkVibrant) {
  		const bgColor = palette.DarkVibrant.getRgb();
  		ctx.fillStyle = 'rgba(' + bgColor[0] + ',' + bgColor[1] + ',' + bgColor[2] + ', 50)';
  	} else {
  		ctx.fillStyle = 'rgb(255,255,255,50)';
  	}
  	ctx.font = "12px 'Circular Spotify'";
  	writeText(ctx, 'bit.ly/quarantine-wrapped', 305, 66);
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
  	link.download = 'quarantine-wrapped.png';
  	link.href = dt;
  	link.click();
  }

  useEffect(() => {
  	console.log(props.done);
    if(props.data && props.done) {
    	getColor();
    }
  }, [props.data]);

  return (
    <div className='canvas-graphic-wrapper'>
    	<div className='graphics-wrapper'>
      {/*<canvas id='downloadable' width='500' height='500'></canvas>*/}
	      <canvas id='songs' width='450' height='800'></canvas>
	      <canvas id='story' width='450' height='800'></canvas>
	      <canvas id='artists' width='450' height='800'></canvas>
      </div>
    </div>
  )
}

export default CanvasGraphic;

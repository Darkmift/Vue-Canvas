<template>
	<div id="app">
		<div class="right-panel">
			<controls />
			<draw-screen />
		</div>
		<album class="left-panel" />
	</div>
</template>

<style lang="scss">
* {
	box-sizing: border-box;
}

body {
	margin: 0;
	padding: 0;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	height: 100vh;

	/**GRID */
	display: grid;
	grid-template-columns: 70vw 30vw;
	background-color: #7aa5c8;

	.controls,
	.draw-screen,
	.album {
		// border: 1px solid #000;
		padding: 10px;
	}

	.controls {
		min-height: 15vh;
	}
	.draw-screen {
		height: 80vh;
	}
	.album {
		height: 100vh;
	}
}
</style>

<script>
import Controls from "./components/Controls";
import DrawScreen from "./components/DrawScreen";
import Album from "./components/Album";
export default {
	name: "App",
	components: { Controls, DrawScreen, Album },
};
</script>

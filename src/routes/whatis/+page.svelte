<div class="container">
	<h1>WHAT IS AN NPU?</h1>
	<p>
		The City of Atlanta is divided into 25 Neighborhood Planning Units (NPUs),
		which are resident advisory councils that make recommendations to the Mayor
		and City Council on zoning, land use, and other planning matters, alcohol
		license and special events applications.
	</p>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div on:click={() => window.open("./NPUmap.png")}>
		<img src="./NPUmap.png" alt="a map of the 25 NPUs" />
	</div>
	<p>
		The NPU system was established in 1974 by the late Mayor Maynard Jackson to
		provide an opportunity for all residents to actively participate in the
		Comprehensive Development Plan, which is the city's vision for the next
		five, ten, and fifteen years.<br /><br />Since then, the NPU system has
		evolved into what it is today – the official avenue for residents to receive
		updates from the City and make recommendations to the City. Giving
		communities a platform to express concerns and provide input helps the City
		to develop plans that best meet the needs of each neighborhood.
	</p>
</div>

<style>
	@font-face {
		font-family: "Tungsten-SemiBold";
		src: url(/fonts/Tungsten-Semibold.otf) format("opentype");
		letter-spacing: 2pt;
	}

	h1 {
		font-family: "Tungsten-SemiBold";
		font-size: 5rem;
		margin: 1svh 0 0 0;
	}

	img {
		width: 55%;
		margin: 0 auto;
		display: block;
		box-shadow: 1px 2px 3px #757575;
		z-index: 3;
	}
</style>

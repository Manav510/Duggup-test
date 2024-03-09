<script>
	import "../app.pcss";
    import Header from '../lib/components/Header.svelte';
	import userData from '$lib/datas/Data.json';
    import './styles.css';
	import {setContext} from 'svelte';
	setContext('userDataContext',userData);
	import About from '../lib/components/About.svelte'
  import Timeline from "$lib/components/Timeline.svelte";
</script>

<div class="app">
	<Header ></Header>

	<main class="flex flex-col lg:flex-row">
		<About ></About>
		<Timeline></Timeline>
		<slot></slot>
	</main>

	
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: #FCFCFF; 
		
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

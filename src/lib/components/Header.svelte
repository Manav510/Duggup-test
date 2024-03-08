<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/duggup_logo.jpeg';
	import home from '$lib/images/home.svg';
	import explore from '$lib/images/explore.png';
	import learn from '$lib/images/learn.png';
	import profile from '$lib/images/profile_img.jpeg'
	import post from '$lib/images/post.png'
	import { getContext } from 'svelte';
	let userData = getContext('userDataContext'); 
</script>

<header>

	<nav class="navbar">

		<div class="navbar-brand">
			<img src={logo} alt="duggup-logo" class="navbar-logo"/>
			<p>duggup</p>
		</div>
		<div class="navbar-center">
		<div class="navbar-menu">
			<div class="navbar-item">
				<img src={home} alt="duggup-home" class="duggup-items-logo"/> 
				Home
			</div>
			<div class="navbar-item">
				<img src={explore} alt="duggup-explore" class="duggup-items-logo"/>
				Explore</div>
			<div class="navbar-item">
				<img src={learn} alt="duggup-learn" class="duggup-items-logo"/>
				Learn</div>
		</div>
		<div class="navbar-post">
			
				<img src={post} alt="duggup-learn" class="duggup-items-logo"/>
				Post
		</div>
		<div class="navbar-profile">
			<img src={profile} alt="profile" class="profile"/>
			<div class="profile-name">{userData.user.name}</div>
			<span class="dropdown-arrow">▼</span>
		</div>
		</div>	
		
	</nav>
</header>

<style>
	.navbar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 73px; 
	padding: 10px 0 0 0;
	margin-left: 117px;
	margin-right: 117px;
	background-color: #ffffff; 
	border-bottom: 5px dotted #eaeaea; 
	}
	.navbar-item{
		width: Hug (112px);
height: Hug (36px);
padding: 0px, 16px, 0px, 16px;
border-radius: 40px;

	}

	.navbar-logo {
	width: 27px;
	height: 27px;
	margin-right: 0;
	padding-right: 0;
	}

	.navbar-brand {
	align-items: center;
	width:108px;
	height: 27px;
	display: flex;
	font-size: 1.5rem;
	font-weight: bold;
	color: #000000;
	margin-left: 5px;
	padding: 5px
	}
	.navbar-center{
		display: flex;
  justify-content: flex-end; 
  flex-grow: 1;
  width: Hug (461px);
height: Hug (37.5px);
gap: 40px;

	}
	.navbar-post{
		width: Hug (102px);
height: Hug (36px);
padding: 0px, 16px, 0px, 16px;
border-radius: 4px;
border: 0.5px;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		background: #fff;
    color: #000;
    border: 0.5px solid #4D4D4D;
    box-shadow: 0px 4px 0px 0px #4D4D4D; 
    padding: 8px 20px;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase; 
    margin-bottom: 20px; 
	}

	.navbar-menu {
	display: flex;
	align-items: right;
	list-style: none;
	margin-right: 0px;
	width: Hug (319px);
	height: Hug (37.5px);

	
	}

	.navbar-item {
	margin-right: 30px;
	padding:10px;
	display: flex;
	align-items: center;
	color: #000000;
	text-decoration: none;
	font-size: 1rem;
	cursor: pointer;
	}
	.duggup-items-logo {
	width: Hug (24px);
	height: Hug (24px);
	padding: 4px;

	}
	.navbar-item:hover {
	text-decoration: underline; /* Hover effect */
	}

	.navbar-profile {
	display: flex;
	align-items: center;
	cursor: pointer;
	width: Fixed (248px);
height: Fixed (52px);
padding: 16px;
border: 0px, 0px, 1px, 0px;
gap: 12px;

	}
	.profile{
		width: 48px;
height: 48px;
padding: 3px, 0px, 0px, 2px;
border-radius: 1000px;
border: 0.5px;
border: 0.5px solid #4D4D4D;
	}
	.profile-name{
		width: Fixed (128px);
height: Hug (24px);
gap: 8px;

	}
</style>
import ToastifyUser from "../ListUser/toastUser";
import images from "../../asset/images/parallaxImage";

import "./Home.scss";
import { useEffect } from "react";
import { useRef } from "react";

function Home() {
	useEffect(() => {
		let text = document.getElementById("text");
		let leaf = document.getElementById("leaf");
		let hill1 = document.getElementById("hill1");
		let hill4 = document.getElementById("hill4");
		let hill5 = document.getElementById("hill5");
		let ship = document.getElementById("ship");
		window.addEventListener("scroll", () => {
			let value = window.scrollY;
			text.style.marginTop = value * 2.5 + "px";
			leaf.style.top = value * -1.5 + "px";
			leaf.style.left = value * 1.5 + "px";
			hill1.style.top = value * 1.5 + "px";
			hill5.style.left = value * 1.5 + "px";
			hill4.style.left = value * -1.5 + "px";
			ship.style.left = -600 + value  + "px";
			ship.style.top = -600 + value + "px";

		});
	}, []);
	return (
		<div className="container_block">
			<div className="parallax">
				<img src={images.hill1} id="hill1" alt="hill1" />
				<img src={images.hill2} id="hill2" alt="hill2" />
				<img src={images.hill3} id="hill3" alt="hill3" />
				<img src={images.hill4} id="hill4" alt="hill4" />
				<img src={images.hill5} id="hill5" alt="hill5" />
				<img src={images.tree} id="tree" alt="tree" />
				<h2 id="text"> Parallax Test Website </h2>
				<img src={images.leaf} id="leaf" alt="leaf" />
				<img src={images.plant} id="plant" alt="plant" />
			</div>

			<section className="sec">
				<h2>Parallax Scrolling Website</h2>
				<p>
					These ideas are, nightmares to white parents
					<br></br>Whose worst fear is a child with dyed hair and who likes earrings
					<br></br>Like whatever they say has no bearing
					<br></br>It's so scary in a house that allows, no swearing
					<br></br>To see him walking around with his headphones blaring
					<br></br>Alone in his own zone, cold and he don't care
					<br></br>He's a problem child, and what bothers him all comes out
					<br></br>When he talks about, his f- dad walking out
					<br></br>'Cause he hates him so bad that he, blocks him out
					<br></br>If he ever saw him again he'd probably knock him out
					<br></br>His thoughts are wacked, he's mad so he's talking back
					<br></br>Talking black, brainwashed from rock and rap
					<br></br>He sags his pants, doo-rags and a stocking cap
					<br></br>His step-father hit him so he socked him back
					<br></br>And broke his nose, his house is a broken home
					<br></br>There's no control, he just lets his emotions go
					<br></br>Sing with me, sing for the year (sing it)
					<br></br>Sing for the laughter, sing for the tear (come on!)
					<br></br>Sing it with me, just for today
					<br></br>Maybe tomorrow, the good Lord will take you away
					<br></br>Entertainment is changing, intertwining with gangsters
					<br></br>In the land of the killers a sinner's mind is a sanctum
					<br></br>Holy or unholy, only have one homie
					<br></br>Only this gun, lonely 'cause don't anyone know me
					<br></br>Yet everybody just feels like they can relate
					<br></br>I guess words are a mothafucka, they can be great
					<br></br>Or they can degrade, or even worse, they can teach hate
					<br></br>It's like these kids hang on every single statement we make
					<br></br>Like they worship us, plus all the stores ship us platinum
					<br></br>Now how the f- did this metamorphosis happen?
					<br></br>From standing on corners and porches just rapping
					<br></br>To having a fortune, no more kissing ass
					<br></br>But then these critics crucify you, journalists try to burn you
					<br></br>Fans turn on you, attorneys all want a turn at you
					<br></br>To get they hands on every dime you have
					<br></br>They want you to lose your mind every time you mad
					<br></br>So they can try to make you out to look like a loose cannon
					<br></br>Any dispute won't hesitate to produce handguns
					<br></br>That's why these prosecutors wanna convict me
					<br></br>Strictly just to get me off of these streets quickly
					<br></br>But all their kids been listening to me religiously
					<br></br>So I'm signing CD's while police fingerprint me
					<br></br>They're for the judge's daughter but his grudge is against me
					<br></br>If I'm such a fucking menace this shit doesn't make sense B<br></br>It's all
					political, if my music is literal
					<br></br>Then I'm a criminal, how the fuck can I raise a little girl?
					<br></br>I couldn't, I wouldn't be fit to
					<br></br>You're full of shit too Guerrera; that was a fist that hit you
					<br></br>Sing with me, sing for the year (sing it)
					<br></br>Sing for the laughter, sing for the tear (sing this shit!)
					<br></br>Sing it with me, just for today
					<br></br>Maybe tomorrow, the good Lord will take you away
					<br></br>They say music can alter moods and talk to you
					<br></br>Well, can it load a gun up for you and cock it too?
					<br></br>Well if it can, and the next time you assault a dude
					<br></br>Just tell the judge it was my fault, and I'll get sued
					<br></br>See what these kids do is hear 'bout us toting pistols
					<br></br>And they wanna get one 'cause, they think the shit's cool
					<br></br>Not knowing we really just protecting ourselves
					<br></br>We entertainers, of course the shit's affecting our sales
					<br></br>You ignoramus, but music is reflection of self
					<br></br>We just explain it, and then we get our checks in the mail
					<br></br>It's fucked up ain't it? How we can come from practically nothing
					<br></br>To being able to have any fucking thing that we wanted
					<br></br>That's why we, sing for these kids who don't have a thing
					<br></br>Except for a dream and a fucking rap magazine
					<br></br>Who post pin-up pictures on they walls all day long
					<br></br>Idolize their favorite rappers and know all their songs
					<br></br>Or for anyone who's ever been through shit in they lives
					<br></br>So they sit and they cry at night wishing they'd die
					<br></br>'Til they throw on a rap record and they sit and they vibe
					<br></br>We're nothing to you, but we're the fucking shit in their eyes
					<br></br>That's why we, seize the moment try to freeze it and own it
					<br></br>Squeeze it and hold it, 'cause we consider these minutes golden
					<br></br>And maybe they'll admit it when we're gone
					<br></br>Just let our spirits live on
					<br></br>Through our lyrics that you hear in our songs and we can
					<br></br>Sing with me, sing for the year (sing it)
					<br></br>Sing for the laughter, sing for the tear (come on!)
					<br></br>Sing it with me, just for today
					<br></br>Maybe tomorrow, the good Lord will take you away
					<br></br>Sing with me, sing for the year (sing it)
					<br></br>Sing for the laughter, sing for the tear (come on!)
					<br></br>Sing it with me, just for today
					<br></br>Maybe tomorrow, the good Lord will take you away
					<br />
				</p>
				<img src={images.spaceship} id="ship" />
			</section>

			<ToastifyUser />
		</div>
	);
}

export default Home;

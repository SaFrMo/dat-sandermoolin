<template>

    <main class="about" v-full-height>

        <section class="entry">
            <h1>Hi! My name is Sander Moolin.</h1>

            <p>I'm a web developer focused on Vue, WordPress, SVG, and accessibility.</p>

            <p>I've worked on:
                <ul>
                    <li><a-div href="https://github.com/funkhaus/vuepress">Vuepress</a-div>, a template to build Vue site for WordPress</li>
                    <li><a-div href="https://gist.github.com/SaFrMo/29a6fbd90047233ec9bf124acba2044b">Several sites for Funkhaus</a-div>, a web design firm based in LA</li>
                    <li><a-div href="https://gist.github.com/SaFrMo/d13f47de90ff0a8bc1d4ee3621a1a7b6">Several NPM packages</a-div>, with a focus on zero-dependency libraries</li>
                </ul>
            </p>

            <p>I'm also very interested in game development and decentralized apps/browsing. I've contributed to:
                <ul>
                    <li><a-div href="https://github.com/beakerbrowser/fritter">Fritter</a-div>, a peer-to-peer Twitter clone</li>
                    <li><a-div href="https://github.com/SaFrMo/phaser-component-library">A reusable library</a-div> of <a-div href="http://phaser.io">Phaser</a-div> components</li>
                    <li><a-div href="https://ldjam.com/users/safrmo/">Ludum Dare</a-div>, a regular worldwide game jam</li>
                </ul>
            </p>

            <p>I use they/them pronouns and believe very strongly in the <a-div href="https://2017.ind.ie/ethical-design/">Ethical Design pyramid</a-div>.</p>

            <p>US programmers like myself have a responsibility to understand how the tools they build can be used to harm people who US society already actively works to harm, especially people of color and/or people who are trans, queer, feminine, and/or have disabilities.</p>

            <p>Tech needs people who will be affected directly by the tools they build, not just who will make money off of those tools.</p>

            <p>I want to contribute to a world where those points are the bare minimum for building tools and creating art with code, and I want to do so in a way that creates exciting, beautiful, and challenging material.</p>

            <p>I'm also on <a-div href="https://twitter.com/sandermoolin">Twitter</a-div>, <a-div href="https://github.com/safrmo">Github</a-div>, and <a href="dat://14e02bfbe6d66113327a1e2f473dcd639dc3d9d97a05c1e5778a6c295fd02095">Fritter</a>. Thanks for reading!</p>

            <p><router-link to="/">Home</router-link></p>

        </section>

    </main>

</template>

<style lang="scss">

$color1: rgba(255, 231, 76, 1);
$color2: rgba(255, 89, 100, 1);
$color3: rgba(89, 195, 195, 1);
$color4: rgba(13, 59, 102, 1);
$color5: rgba(250, 240, 202, 1);

main.about {
    background-color: $color1;

    .entry {
        padding: 20px;
        position: fixed;
        bottom: 20px;
        right: 20px;
        max-height: 50vh;
        max-width: 50%;
        background-color: #f1f1f1;
        overflow-y: auto;

        & > * {
            max-width: 700px;
        }
        a {
            text-decoration: underline;
        }
    }


}

// mobile
@media (max-width: 750px) {

    main.about {
        .entry {
            max-width: calc(100% - 80px);
        }
    }

}



</style>

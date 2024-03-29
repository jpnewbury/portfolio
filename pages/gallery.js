import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Background from "../components/background";
import Heading from "../components/pageHeading";
import Seo from "../components/svg/Seo";
import Responsive from "../components/svg/Responsive";
import Photography from "../components/svg/photography";
import Art from "../components/svg/art";
import Social from "../components/social";

export default function Gallery() {
  return (
    <div className="container links" id="top">
      <Head>
        <title>John P. Newbury - Gallery</title>
        <meta
          property="og:title"
          content="John P. Newbury - Designer"
          key="title"
        />
      </Head>
      <section>
        <div className="wireframe">
          <Background />
        </div>
        <div className="content">
          <Heading />
        </div>
        <div className="page-intro">
          <h2>Gallery</h2>
        </div>
      </section>
      <section className="grid">
        <Link href="#design">
          <article className="card">
            <h2>Illustration</h2>
            <img src="SeattleSkylineCopy.png" width="100%" alt="an image" />
            <small>Illustration and Graphics</small>
          </article>
        </Link>
        <Link href="#photography">
          <article className="card">
            <h2>Photography</h2>
            <img src="gossips.jpg" width="100%" alt="an image" />
            <small>Mountains, Rivers and Deserts</small>
          </article>
        </Link>
        <Link href="#art">
          <article className="card">
            <h2>Fine Art</h2>
            <img src="Spell2.jpg" width="100%" alt="an image" />
            <small>Painting and Drawings</small>
          </article>
        </Link>
      </section>

      <section className="split bg-white" id="article">
        <span className="intro">
          <p>
            Small details can have an impact on how a user experiences your
            website or app. Frequently overlooked details such as form fields
            which present the wrong keyboard layout can cause a user to leave
            your website or never return due to a subconsciously negative
            experience. How long a user spends searching for an @ sign when
            filling out an email field can impact the overall user experience.
          </p>
        </span>
        <article>
          <p>
            To build engaging and equitable websites, I employ design thinking
            and user interaction research. Designs that are clear and concise
            are easier to navigate by everyone, not just the web elite.
          </p>
          <p>
            I avoid adding unnecessary barriers to content like modal pop-up
            windows or subscription portals which block content and cannot be
            closed without the user searching for the close button. These
            barriers feel intrusive and can sidetrack a user from the desired
            content they are seeking. Many users feel confused or fished when
            they encounter them and click out of your website or app.
          </p>
          <Seo />
          <p>
            Designing a website for search engines and accessibility is
            automatically built into my design process. Search engines must have
            access to your content. Web pages structured around a clear document
            hierarchy and factoring in WCAG accessibility standards rank better.
          </p>
          <p>
            Editing or developing engaging content is often the responsibility
            of the designer. Hiring a designer that can create content and
            understand how user experience and accessibility play a role in the
            delivery is hard to find. My experience as an editor and developer
            brings a full toolbox of required disciplines to build a complete
            website experience.
          </p>
        </article>
      </section>
      <span id="design" />
      <br />
      <br />
      <div className="page-intro">
        <h2>Design & Illustration</h2>
      </div>

      <section className="design">
        <article>
          <div>
            <h3>Seattle Skyline</h3>
          </div>
          <div className="stack">
            <Image
              src="/SeattleSkylineCopy.png"
              height={1216}
              width={1941}
              alt="an image"
            />
          </div>
          <div>
            <small>Adobe Illustrator</small>
          </div>
        </article>
        <article>
          <div>
            <h3>Convergance at Castle Valley</h3>
          </div>
          <div className="stack">
            <Image
              src="/castleValley.png"
              height={720}
              width={1280}
              alt="Illustrator drawn image of Castle Valley in Utah"
            />
          </div>
          <div>
            <small>Adobe Illustrator</small>
          </div>
        </article>
        <article>
          <div>
            <h3> A sample mockup for an upcoming book and companion web app</h3>
          </div>
          <div className="stack">
            <Image
              src="/design1.png"
              height={1632}
              width={2010}
              alt="an image"
            />
          </div>
          <div>
            <small>Adobe In Design & Illustrator</small>
          </div>
        </article>
        <article>
          <div>
            <h3>Macro invertebrate illustration </h3>
          </div>
          <div className="center">
            <div className="stack">
              <Image
                src="/drunella1.png"
                height={760}
                width={687}
                alt="Drunella grandis mayfly nymph illustration"
              />
            </div>
          </div>
          <div>
            <small>Affinity Designer</small>
          </div>
        </article>
      </section>

      <div className="split bg-white">
        <span className="intro">
          <p>
            Graphic design is functional art serving to inform the viewer a
            story or narrative with a visual impact. The use of shapes, colors
            and text all merge into a single cohesive design that can describe,
            influence or excite the viewer.
          </p>
        </span>
        <Responsive />
        <p>
          I design website with a mobile first aproach ensuring that the site
          will display as intended on all devices.
        </p>
        <p>
          Go ahead, give this website a squish on your device. Shrink it and
          expand the viewport, watch the layout seamlessly adapt to your screen.
        </p>
      </div>
      <br />
      <span id="photography" />
      <section className="s3">
        <div className="page-intro">
          <h2>Photography</h2>
        </div>
        <div className="bg-white">
          <Image
            src="/glenwoodPanoHDRmonochrome.jpg"
            height={560}
            width={1200}
            alt="Image"
          />
          <figcaption>
            A modern marvel, i-70 passing through Hanging Lake Tunnel.
          </figcaption>
        </div>
        <div className="bg-white">
          <Image src="/pagosa.jpg" height={852} width={1280} alt="Image" />
          <figcaption>
            An old mine in the San Juan mountains, Colorado.
          </figcaption>
        </div>
        <div className="bg-white">
          <Image src="/gossipsLg.jpg" height={852} width={1280} alt="Image" />
          <figcaption>Sandstone formations in Utah.</figcaption>
        </div>
        <div className="split bg-white">
          <span className="intro">
            <p>
              Cameras tell the truth. As an image capturing device, the camera
              records everything you point it at. Being able to take the viewer
              to a time and place with your photo is the foundation of a good
              image. Creating a photograph in black and white or with special
              color treatments becomes art when you succesfuly transported your
              audience to that time and place.
            </p>
          </span>
          <p>
            I believe that the use of photography brings viewers deeper into the
            design experience. Breaking large blocks of text or filling in areas
            left blank with a quality image can make your web design more
            inviting and engaging.
          </p>
          <Photography />
          <p>
            The use of art direction in a website allows designers to deliver
            the highest quality image for given screen sizes. In addition to
            serving up optimized images, using lazy loading images ensures the
            user does not download image resources if not required.
          </p>
        </div>
        <div className="center bg-white">
          <div className="col5 ">
            <div>
              <Image
                src="/Drop-Dead-Sexy-Dark.jpg"
                height={200}
                width={200}
                alt="A fishing fly"
              />
            </div>
            <div>
              <Image
                src="/OG_Zika_420.jpg"
                height={200}
                width={200}
                alt="A fishing fly"
              />
            </div>
            <div>
              <Image
                src="/BlackDogSpey.jpg"
                height={200}
                width={200}
                alt="A fishing fly"
              />
            </div>
            <div>
              <Image
                src="/altKrust.jpg"
                height={200}
                width={200}
                alt="A fishing fly"
              />
            </div>
            <div>
              <Image
                src="/LastChanceGreenDrake.jpg"
                height={200}
                width={200}
                alt="A fishing fly"
              />
            </div>
          </div>
          <div className="split">
            <p>
              I exploit deep-field macro photography techniques to capture
              fishing flies that reveal exquisite details often not visible in
              those small objects. To see more examples of my macro photography
              work,{" "}
              <a href="https://flyfish-pied.vercel.app/">
                &nbsp;please visit my fly fishing website.
              </a>{" "}
              <br />
              All content on this and my angling arts website is hand crafted by
              myself.
            </p>
          </div>
        </div>
      </section>
      <span id="art" />
      <div className="page-intro">
        <h2>Fine Art</h2>
      </div>
      <section className="section3 bg-white">
        <div>
          <Image
            src="/Spell2.jpg"
            height={847}
            width={1280}
            alt="OIl Paintiing"
          />
        </div>
        <figcaption>
          Spell of the Sensous 24&quot; x 36&quot;, oil on canvas. (Sold, in
          private collection)
        </figcaption>
        <div>
          <Image
            src="/JaffeParkAspenPainting.jpg"
            height={1032}
            width={1280}
            alt="OIl Paintiing"
          />
        </div>
        <figcaption>
          Roaring Fork at Jaff Park, Aspen Colorado, oIl on canvas 20&quot; x
          24&quot;. (Sold, in private collection)
        </figcaption>
        <div>
          <Image
            src="/SilverLakeBrightonUtah.jpg"
            height={970}
            width={1280}
            alt="OIl Paintiing"
          />
        </div>
        <figcaption>
          Silver Lake at Brighton Utah 24&quot; x 36&quot; oil on panel. (Sold,
          in private collection)
        </figcaption>
        <div className="split">
          <span className="intro">
            <p>
              Painting as a discipline has taught me many things about the world
              we live in and how people perceive design. The act of reducing a
              scene to its basic shapes, colors, and value is the foundation of
              good design. Designing a document holds the same process as
              painting on a canvas. A good design has a lead-in point that
              catches the users eye and directs it through the page hierarchy to
              tell the story, invoke an emotional response, or convey an idea.
            </p>
          </span>
          <Art />
          <p>
            A web page based on the design thinking principle has a natural flow
            that users do not have to think or adjust their perceptions to
            understand. Users unfamiliar with your website will settle in and
            feel comfortable navigating without adding unnecessary design
            elements to guide them.
          </p>
        </div>
      </section>
      <section className="center s2">
        <Social />
      </section>
    </div>
  );
}

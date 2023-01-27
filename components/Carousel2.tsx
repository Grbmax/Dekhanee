/* import React from 'react'

const Carousel2 = () => {
    var timelines = [];
// Timeline elements
timelines[0] = caption1();
timelines[1] = caption2();
timelines[2] = caption3();

var $myCarousel = $('#carouselExampleCaptions');

// Play captions on first slide
timelines[0].play();

// Play captions on slide change
$myCarousel.on('slide.bs.carousel', function(e) {
    var currentSlideIndex = $(e.relatedTarget).index();
    timelines[currentSlideIndex].restart();
});

// Timeline captions for slide 1
function caption1() {
    var slide1 = '.carousel-inner :nth-child(1) .carousel-caption';
    var tl1 = gsap.timeline({ paused: true});
    tl1.to(slide1, { autoAlpha: 1 })
    .from(slide1+' :nth-child(1)', { x: "20%", y: -80, opacity: 0, duration: 1.0, delay: 0.1, ease: "power3.easeOut", })
    .from(slide1+' :nth-child(2)', { x: 30, scale: .2, opacity: 0, duration: .2, rotation: 180, duration: .5, ease: "power1.easeIn" }, "-=1")
    return tl1;
}

// Timeline captions for slide 2
function caption2() {
    var slide2 = '.carousel-inner :nth-child(2) .carousel-caption';
    var tl2 = gsap.timeline({ paused: true, defaults: {opacity: 0, duration: 0.7} });
    tl2.from(slide2+' :nth-child(1)', { x: -200, delay: 0.6 })
    .from(slide2+' :nth-child(2)', { x: 300, }, "-=0.6")
    return tl2;
}

// Timeline captions for slide 3
function caption3() {
	var slide3 = '.carousel-inner :nth-child(3) .carousel-caption';
    var tl3 = gsap.timeline({ paused: true, defaults: {opacity: 0, duration: 1.1} });
    tl3.from(slide3+' :nth-child(1)', { x: 200, delay: 0.1 })
    .from(slide3+' :nth-child(2)', { x: -300 }, "-=0.4")
    return tl3;
}
  return (
    <div>
      <div className="carousel slide" data-ride="carousel" id="carouselExampleCaptions">
    <div className="carousel-inner" role="listbox">
        <div className="carousel-item active"><img className="w-100 d-block" src="https://dummyimage.com/1920x1080/262626/04e982&amp;text=1" alt="Slide Image" />
            <div className="carousel-caption">
                <h3>Heading Slide 1</h3>
                <p>Paragraph Slide 1</p>
            </div>
        </div>
        <div className="carousel-item"><img className="w-100 d-block" src="https://dummyimage.com/1920x1080/262626/04e982&amp;text=2" alt="Slide Image" />
            <div className="carousel-caption">
                <h3>Heading Slide 2</h3>
                <p>Paragraph Slide 2</p>
            </div>
        </div>
        <div className="carousel-item"><img className="w-100 d-block" src="https://dummyimage.com/1920x1080/262626/04e982&amp;text=3" alt="Slide Image" />
            <div className="carousel-caption">
                <h3>Heading Slide 3</h3>
                <p>Paragraph Slide 3</p>
            </div>
        </div>
    </div>
    <div><a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev"><span className="carousel-control-prev-icon"></span><span className="sr-only">Previous</span></a><a className="carousel-control-next" href="#carouselExampleCaptions"
            role="button" data-slide="next"><span className="carousel-control-next-icon"></span><span className="sr-only">Next</span></a></div>
    <ol className="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
</div>
    </div>
  )
}

export default Carousel2
 */
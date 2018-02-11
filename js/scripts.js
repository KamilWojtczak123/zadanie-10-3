$(function() {
    var $carousel = $('#carousel');
    
    var IMAGE_WIDTH = 600,
    ANIMATION_TIME = 800,
    SLIDE_INTERVAL = 2000; 
    
    function changeSlide() {
        $carousel.animate({marginLeft: -IMAGE_WIDTH},ANIMATION_TIME,moveFirstSlide);
    }
    
    function moveFirstSlide() {
        var firstItem = $carousel.find('li').first(),
            lastItem = $carousel.find('li').last();
        
        lastItem.after(firstItem);
        $carousel.css({marginLeft: 0});
    }
    setInterval(changeSlide, SLIDE_INTERVAL);
});
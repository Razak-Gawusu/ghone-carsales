import React, { useEffect } from 'react'
import { useRef } from 'react'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

function Carousel({images}) {
    const track = useRef()
    const nextButton = useRef()
    const prevButton = useRef()
    const dotsNav = useRef()
    

    useEffect (() => {
        createImage()
        arrangeSlides()
        navImage()
    }, [])

    function createImage(){
        for (let i = 0; i < images.length; i++){
            let img = document.createElement('img')
            img.setAttribute('src', `../images/${images[i]}`)
            img.setAttribute('class', 'carousel__image')
            let list = document.createElement('li')
            list.setAttribute('class', 'carousel__slide')
            if (i === 0){
                list.classList.add('current--slide')
            }
            list.append(img)
            track.current.append(list)
        }
    }

    function navImage(){
        for (let i = 0; i < images.length; i++){
            let img = document.createElement('img')
            img.setAttribute('src', `../images/${images[i]}`)
            img.setAttribute('class', 'carousel__indicator')
            if (i === 0){
                img.classList.add('current--slide')
            }
            dotsNav.current.append(img)
        }
    }



    // arrange the slides next to one another
    function arrangeSlides () {
        const slides = Array.from(track.current.children)
        const slideWidth = slides[0].getBoundingClientRect().width
        
        for(let i = 0; i < slides.length; i++){
            slides[i].style.left = slideWidth * i + 'px'
        }
    }

    function moveToSlide (track, currentSlide, targetSlide) {
        track.current.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current--slide')
        targetSlide.classList.add('current--slide')
    }

    function updateDots (currentDot, targetDot) {
        currentDot.classList.remove('current--slide')
        targetDot.classList.add('current--slide')
    }

    function hideShowArrows (slides, targetIndex) {
        if (targetIndex === 0){
            prevButton.current.classList.add('is-hidden')
            nextButton.current.classList.remove('is-hidden')
        } else if (targetIndex === slides.length - 1){
            prevButton.current.classList.remove('is-hidden')
            nextButton.current.classList.add('is-hidden')
        } else {
            prevButton.current.classList.remove('is-hidden')
            nextButton.current.classList.remove('is-hidden')
        }
    }

    // when i click right, move slides to the Right
    function moveRight(){
        const currentSlide = track.current.querySelector('.current--slide')
        const slides = Array.from(track.current.children)
        const nextSlide = currentSlide.nextElementSibling
        const currentDot = dotsNav.current.querySelector('.current--slide')
        const nextDot = currentDot.nextElementSibling
        const nextIndex = slides.findIndex(slide => slide === nextSlide)
        
        moveToSlide(track, currentSlide, nextSlide)
        updateDots(currentDot, nextDot)
        hideShowArrows(slides, nextIndex)

    }

    // when i click left, move slides to the left
    function moveLeft(){
        const currentSlide = track.current.querySelector('.current--slide')
        const slides = Array.from(track.current.children)
        const prevSlide = currentSlide.previousElementSibling
        const currentDot = dotsNav.current.querySelector('.current--slide')
        const prevDot = currentDot.previousElementSibling
        const prevIndex = slides.findIndex(slide => slide === prevSlide)

        moveToSlide(track, currentSlide, prevSlide)
        updateDots(currentDot, prevDot)
        hideShowArrows(slides, prevIndex)
    }

    function handleNav(e){
        const dots = Array.from(dotsNav.current.children)
        const slides = Array.from(track.current.children)

        const targetDot = e.target.closest('img')
        if(!targetDot) return

        const currentSlide = track.current.querySelector('.current--slide')
        const currentDot = dotsNav.current.querySelector('.current--slide')
        const targetIndex = dots.findIndex(dot => dot === targetDot)
        const targetSlide = slides[targetIndex]
        
        moveToSlide(track, currentSlide, targetSlide)
        updateDots(currentDot, targetDot)
        hideShowArrows(slides, targetIndex)
    }


  return (
    <div className='carousel'>
        <button onClick={moveLeft} className="carousel__button carousel__button--left is-hidden" ref={prevButton}><FaChevronLeft /></button>
        <div className="carousel__track--container">
            <ul className="carousel__track" ref={track}>
            </ul>
        </div>
        <button onClick={moveRight} className="carousel__button carousel__button--right" ref={nextButton}><FaChevronRight /></button>

        <div onClick={handleNav} className="carousel__nav" ref={dotsNav}>
        </div>
    </div>
  )
}

export default Carousel

import React, {useState, useEffect, useRef} from 'react';
import './Carousel.css';

const IMG_WIDTH = 300;
const IMG_HEIGHT = 300;
const parentPad = 0;
const VISIBLEIMAGES = 3;
const DURATION = 750;

const Carousel = (props) => {
  const {imgList = [], img_width = IMG_WIDTH, img_height = IMG_HEIGHT, visibleImages = VISIBLEIMAGES, duration = DURATION, autoNext = false, timeForNext = 3000} = props;
  /* Hooks Declarations Start*/


  const [visibleItemsProps, setVisibleItemsProps] = useState({ order: [], styles: {}});

  const durationRef = useRef(duration);
  /* Hooks Declarations End*/
  const parentHeight = img_height + 2 * parentPad;
  const parentWidth = img_width * 3;
  const elementsInLeft = Math.ceil(visibleImages / 2);
  const elementsInRight = visibleImages - elementsInLeft;

  const loadCarousel = () => {
    return (
      <ul className="carouselWrapper" style={{ height: parentHeight + 'px', width:  parentWidth + 'px', padding: parentPad + 'px', perspective: '500px'}}>
      {
        imgList.map(({large_url, url, id}, index) => {
          const dn = visibleItemsProps.order.indexOf(index) === -1; // To not to show images that are out of visibility scope
          const styles = visibleItemsProps[index] ? visibleItemsProps[index].styles: {};
          return (
            <li key={id} className={'imgWrap ' + (dn ? 'dn': '')} style={{...styles, position: 'absolute', transition: `all ${durationRef.current}ms linear `}} onClick={(e) => { changeCenter({e, index, large_url})} }>
              <img src={url} alt={'img_' + id } width={img_width} height={img_height}/>
            </li>
          )
        })
      }
      </ul>
    );
  };

  return (
    <React.Fragment>
      {loadCarousel()}
    </React.Fragment>
  );
}
export default Carousel;
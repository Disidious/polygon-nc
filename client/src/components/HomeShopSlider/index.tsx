import { useEffect, useState } from 'react';
import Slider from 'react-slick';

import style from './style.module.css';
import './style.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { ShopCategoryCard, Spinner } from 'components';
import { CategoryDisplay } from 'types';

import { ApiHandler } from 'handlers/api_handler';

function HomeShopSlider() {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState<CategoryDisplay[]>([]);

    useEffect(() => {
        setLoading(true);
        (async () => {
            const response =  await ApiHandler.getCategoriesDisplay()
            if (response.status === 'success') {
                setCategories(response.json);
            }

            setLoading(false);
        })()
        
    }, [])

    const SliderArrow = (props: any) => {
        const { right=false, onClick } = props;
        return (
          <div
            className={`${style.sliderArrow} ${right && style.sliderRightArrow}`}
            onClick={onClick}
          >
            <i className={`material-icons`}>{right ? 'chevron_right' : 'chevron_left'}</i>
          </div>
        );
    }

    const SliderDots = () => (
        <div className={style.sliderDotsContainer}>
            <div className={style.sliderDots} />
        </div>
    )
    
    const getSlidesToShow = (num: number) => {
        return loading ? 1 : Math.min(categories.length, num)
    }

    const sliderSettings = {
		dots: true,
		infinite: true,
		slidesToShow: getSlidesToShow(3),
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		nextArrow: <SliderArrow right/>,
		prevArrow: <SliderArrow />,
        customPaging: SliderDots,
        responsive: [
            {
              breakpoint: 700,
              settings: {
                slidesToShow: getSlidesToShow(2),
              }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: getSlidesToShow(1),
                }
            },
        ]
	};
    
	return (
		<div className={style.container}>
            <div className={style.sliderContainer}>
                <Slider {...sliderSettings}>
                    {
                        loading 
                        ?
                        <Spinner size='lrg' />
                        :
                        categories.map((cat, idx) => (
                            <div key={idx}>
                                <ShopCategoryCard name={cat.name} img={cat.image} id={cat.id} />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
	);
}

export default HomeShopSlider;

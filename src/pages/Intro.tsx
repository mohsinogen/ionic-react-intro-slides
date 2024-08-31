import {
  IonButton,
  IonContent,
  IonFooter,
  IonPage,
  IonText,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Intro.css";
import "swiper/css";
import "@ionic/react/css/ionic-swiper.css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

function Intro() {
  const router = useIonRouter();
  const [swiper, setSwiper] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const onNextClick = () => {
    if(slides.length>currentSlide+1){
        swiper.slideTo(currentSlide+1);
    } else {
        onSkip()
    }
  };

  const onSkip = () => {
    router.push("/home");
  };

  const slides = [
    {
      title: "Effortless Payment Transfers",
      caption: "Pay and transfer funds with ease anytime, anywhere.",
      image: "./slider1.svg",
    },
    {
      title: "Smart Account Management",
      caption: "Track your spending and manage your accounts effortlessly.",
      image: "./slider2.svg",
    },
    {
      title: "Enhanced Security Features",
      caption:
        "Keep your financial information safe with advanced security measures.",
      image: "./slider3.svg",
    },
  ];
  return (
    <IonPage>
      <IonContent color={"light"}>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true, type: "bullets" }}
          onSlideChange={(event) => {
            setCurrentSlide(event.activeIndex);
          }}
          onSwiper={setSwiper}
        >
          {slides.map((item) => (
            <SwiperSlide className="slide" key={item.title}>
              <img className="image" src={item.image} />
              <br />
              <div className="text-container">
                <IonText className="heading">{item.title}</IonText>
                <br />
                <IonText color={"medium"} className="caption">
                  {item.caption}
                </IonText>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonToolbar color={"light"}>
          <div
            className="ion-margin-horizontal"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <IonButton onClick={onSkip} color={"danger"} fill="clear">
              skip
            </IonButton>
            <IonButton color={"danger"} onClick={onNextClick}>Next</IonButton>
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
}

export default Intro;

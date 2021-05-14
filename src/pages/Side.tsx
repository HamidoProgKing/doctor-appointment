import { IonApp, IonAvatar, IonBackdrop, IonCardSubtitle, IonChip, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonMenu,  IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import { bookmarkOutline, chatboxOutline, homeOutline } from 'ionicons/icons';
import React, { Fragment } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Side.css';

class Side extends React.Component{
  
  render() {
    return (
      <Fragment >
    <IonMenu side="start" menuId="First" contentId="main">
      <IonHeader >
        <IonToolbar color="light" className="HeaderSidebar" >
             
        <IonAvatar  >
            <IonImg src="/assets/img/man.jpg"  />
          </IonAvatar>
    
          <IonLabel color="primary" className="TitleHeaderSB"> HamidoCzar</IonLabel>
          <IonCardSubtitle color="medium">HamidoCzar99@gmail.com</IonCardSubtitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonIcon   slot="start" icon={homeOutline} ></IonIcon>
            <IonLabel > Home</IonLabel>
          </IonItem>
          <IonItem>
          <IonIcon   slot="start" icon={bookmarkOutline} ></IonIcon>
            <IonLabel >  Booking</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon   slot="start" icon={chatboxOutline}></IonIcon>
            <IonLabel > Messages</IonLabel>
          </IonItem>

        </IonList>
      </IonContent>
    </IonMenu>
    <IonRouterOutlet id="main"></IonRouterOutlet>
    </Fragment>
    );
    
  }
};

export default Side;
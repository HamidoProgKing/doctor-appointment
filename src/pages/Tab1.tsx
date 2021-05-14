import { IonActionSheet, IonApp, IonAvatar, IonButton, IonCard,  IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon,  IonImg,  IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonRouterOutlet, IonSearchbar, IonSlide, IonSlides, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { medkit,filterOutline, pulse, podium, person,  chatboxOutline, bookmarkOutline, homeOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import Side from './Side';
import './Tab1.css';


const Tab1: React.FC = () => {
  const [showActionSheet, setShowActionSheet] = useState(false)
  return (

    <IonPage>
      <Side></Side>

            <IonHeader>

        <IonToolbar>
        <IonTitle color='primary' >Doctors Appointments</IonTitle>
        <IonMenuButton menu='First' slot="start" className="menu"  color="dark" ></IonMenuButton>

        
          
        </IonToolbar>
         </IonHeader>

      <IonContent fullscreen color="light">
     

      <IonToolbar color="light">
        <IonSearchbar ></IonSearchbar>

        <IonButton icon-only item-right  color="light"  onClick={() => setShowActionSheet(true)} slot="end" >
        <IonIcon color="dark" icon={filterOutline}></IonIcon>
        </IonButton>
        <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        cssClass='my-custom-class'
        buttons={[{
          text: 'Doctors',
          role: 'destructive',
          icon: person,
          handler: () => {
            console.log('Doctors clicked');
          }
        }, {
          text: 'Clinic',
          icon: podium,
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Spesialist',
          icon: pulse,
          handler: () => {
            console.log('Play clicked');
          }
        }]}
      >

      </IonActionSheet>
      </IonToolbar>

            <IonItem className="emergency">
            <IonIcon icon={medkit}  color="danger" />
            <IonCardHeader>
              <IonCardTitle>Emergency</IonCardTitle>
            <IonCardSubtitle>Emergency Call</IonCardSubtitle>
          </IonCardHeader>
          </IonItem>
        
        <div className="title">
      <h3>Top Doctors</h3>
      <p>press to see Doctor details...</p>
      </div>
        <IonSlides >

      <IonSlide >
      <IonCard >

        <IonItem >
        <IonThumbnail slot="start">
            <IonImg src="/assets/img/DR1.jpg"  />
          </IonThumbnail>
    
        <IonCardHeader>
          <IonCardTitle>Aycha Ahmeidi</IonCardTitle>
        <IonCardSubtitle>Doctors genral</IonCardSubtitle>
        <IonCardSubtitle>2 year </IonCardSubtitle>
        </IonCardHeader>
        </IonItem>

        </IonCard>
      
      </IonSlide>

      <IonSlide >
      <IonCard>

        <IonItem >
        <IonThumbnail slot="start">
            <IonImg src="/assets/img/DR2.jpg"  />
          </IonThumbnail>
        <IonCardHeader>
          <IonCardTitle>Ossama Ahmeidi</IonCardTitle>
        <IonCardSubtitle>Doctors genral</IonCardSubtitle>
        <IonCardSubtitle>1 year </IonCardSubtitle>
        </IonCardHeader>

        </IonItem>

        </IonCard>
      
      </IonSlide>

      <IonSlide >
      <IonCard>

        <IonItem >
        <IonThumbnail slot="start">
            <IonImg src="/assets/img/DR3.jpg"  />
          </IonThumbnail>
         <IonCardHeader>
          <IonCardTitle>Mabrouk Bennoui</IonCardTitle>
        <IonCardSubtitle>Doctors genral</IonCardSubtitle>
        <IonCardSubtitle>6 month </IonCardSubtitle>
        </IonCardHeader>
        </IonItem>

        </IonCard>
      
      </IonSlide>


    </IonSlides>

    
    <div className="title">
      <h3>Clinics</h3>
      <p>press to see Clinic's details...</p>
      </div>

      <IonSlides >

<IonSlide >
<IonCard>

        <img src="/assets/img/clinic123.jpg" />
        <IonCardHeader>
          <IonCardSubtitle>Clinic1</IonCardSubtitle>
          <IonCardTitle>Bordj bou Arreridj</IonCardTitle>
        </IonCardHeader>


  </IonCard>

</IonSlide>

<IonSlide >
<IonCard>

<img src="/assets/img/clinic1234.jpg" />
<IonCardHeader>
  <IonCardSubtitle>Clinic2</IonCardSubtitle>
  <IonCardTitle>Alger</IonCardTitle>
</IonCardHeader>

</IonCard>

</IonSlide>

<IonSlide >
<IonCard>

        <img src="/assets/img/clinic12345.jpg" />
        <IonCardHeader>
          <IonCardSubtitle>Clinic3</IonCardSubtitle>
          <IonCardTitle>Setif</IonCardTitle>
        </IonCardHeader>

  </IonCard>

</IonSlide>


</IonSlides>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;

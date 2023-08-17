import React, { useState } from 'react'
import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react'
import { home, storefront } from 'ionicons/icons'

interface ILayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({children}) => {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>OpenPOS</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList id='inbox-list'>
            <IonItem routerDirection='none' routerLink='/' lines='none'>
              <IonIcon icon={home} slot='start' color='dark'></IonIcon>
              <IonLabel>Dashboard</IonLabel>
            </IonItem>
            <IonItem routerDirection='none' routerLink='/cashier' lines='none'>
              <IonIcon icon={storefront} slot='start' color='dark'></IonIcon>
              <IonLabel>Cashier</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          {children}
        </IonContent>
      </IonPage>
    </>
  )
}

export default Layout
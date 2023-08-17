import { IonButton, IonCard, IonCardContent, IonIcon, IonLabel } from '@ionic/react'
import React from 'react'
import './Cashier.scss'
import { add } from 'ionicons/icons'
import TableProductCart from './TableProductCart'

const Cashier = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', flexGrow: 1, padding: 1}}>
      <div style={{background: "none", borderRadius: "0.55rem", width: '75%', marginRight: '2rem'}}>
        <IonCard style={{overflow: 'auto'}}>
          <IonCardContent>
            <div style={{display: 'flex', flexGrow: 1, justifyContent: 'space-between', flexDirection: 'row', marginBottom: '1rem'}}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <IonLabel>
                  <h1><b>
                    Sunday, 13 August 2023
                  </b></h1>
                </IonLabel>
              </div>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <IonButton fill='solid' size='small'>
                  <IonIcon slot='start' icon={add} />
                    Add Customer
                </IonButton>
                <IonButton fill='solid' size='small'>
                  <IonIcon slot='start' icon={add} />
                    Add Doctor
                </IonButton>
                <IonButton fill='outline' size='small'>
                  <IonIcon slot='start' icon={add} />
                    Add Prescription
                </IonButton>
              </div>
            </div>
            <TableProductCart />
          </IonCardContent>
        </IonCard>
      </div>
      <div style={{background: "none", borderRadius: "0.55rem", width: '25%', marginRight: '2rem'}}>
        <IonCard className=''>
          <IonCardContent>
            Cashier
          </IonCardContent>
        </IonCard>
      </div>
    </div>
  )
}

export default Cashier
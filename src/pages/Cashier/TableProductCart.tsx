import { IonButton, IonCol, IonGrid, IonIcon, IonInput, IonRow } from '@ionic/react'
import { trash } from 'ionicons/icons'
import React from 'react'
import './Cashier.scss'
import styled from 'styled-components'

const InputRow = styled(IonInput)`
    --padding-bottom: 0,
    --padding-end: 0,
    --padding-start: 0,
    --padding-top: 0,
    --color: white,
    --border-width: 20px,
    --placeholder-opacity: 10%
`

const TableProductCart = () => {
  return (
    <div>
        <IonGrid>
            <IonRow>
                <IonCol size='1'>No</IonCol>
                <IonCol>Name</IonCol>
                <IonCol>Stock</IonCol>
                <IonCol>Unit</IonCol>
                <IonCol>Quantity</IonCol>
                <IonCol>Price</IonCol>
                <IonCol>Discount</IonCol>
                <IonCol>Subtotal</IonCol>
                <IonCol>Action</IonCol>
            </IonRow>
            <IonRow>
                <IonCol size='1'></IonCol>
                <IonCol>
                    <input type='text' size={20} placeholder="Enter text" />
                </IonCol>
                <IonCol>1</IonCol>
                <IonCol>Unit</IonCol>
                <IonCol>
                    <IonInput size={20} labelPlacement="floating" fill="outline" placeholder="Enter text" />
                </IonCol>
                <IonCol>20000</IonCol>
                <IonCol>
                    <IonInput size={20} labelPlacement="floating" fill="outline" placeholder="Enter text" />
                </IonCol>
                <IonCol>20000</IonCol>
                <IonCol>
                    <IonButton fill='clear'>
                        <IonIcon size='large' icon={trash} color='danger' />
                    </IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
    </div>
  )
}

export default TableProductCart
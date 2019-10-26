import {IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react';

interface IState {
    page: string;
}

interface IProps {

}

class Home extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.setState({
            page: "Loading...",
        });

        
    }

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>App Name</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonGrid>
                        <IonRow>
                            Test
                        </IonRow>
                        <IonRow>
                            <div dangerouslySetInnerHTML={{ __html: page }}>

                            </div>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>
        );
    }
}

export default Home;

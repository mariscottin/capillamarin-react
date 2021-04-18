import React, { useState, useEffect } from 'react';
import db from '../firebase';
import ReactLoading from 'react-loading';
import Moment from 'react-moment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import NewItem from './NewItem';
import './AdminTab.css';

function AdminTab() {
    const [tab, setTab] = useState('novedades');
    const [isLoading, setIsLoading] = useState(false);
    const [novedades, setNovedades] = useState();
    const [audios, setAudios] = useState();
    const [newNovedad, setNewNovedad] = useState(false);
    const [newHomilia, setNewHomilia] = useState(false);
    const [success, setSuccess] = useState(false);

    const fetchNovedades = () => {
        db.collection('novedades').orderBy("date", "desc").onSnapshot(snapshot => (
            setNovedades(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    }

    const fetchAudios = () => {
        db.collection('audios').orderBy("date", "desc").onSnapshot(snapshot => (
            setAudios(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    }

    const secondsToDate = (secs) => {
        let t = new Date(1970, 0, 1);
        t.setSeconds(secs);
        return t;
    }

    const handleTabNovedades = () => {
        setTab('novedades');
        setNewNovedad(false);
        setNewHomilia(false);
        setSuccess(false);
    }

    const handleTabHomilias = () => {
        setTab('homilias');
        setNewNovedad(false);
        setNewHomilia(false);
        setSuccess(false);
    }

    const handleBack = () => {
        setNewNovedad(false);
        setNewHomilia(false);
        setSuccess(false);
    }

    const handleSuccessUploading = () => {
        setSuccess(true);
        setNewHomilia(false);
        setNewNovedad(false);
    }

    useEffect(() => {
        if (tab === 'novedades') {
            setIsLoading(true);
            fetchNovedades();
        }
        if (tab === 'homilias') {
            setIsLoading(true);
            fetchAudios();
        }
    }, [tab])

    useEffect(() => {
        if (novedades) {
            setIsLoading(false);
        }
        if (audios) {
            setIsLoading(false);
        }
    }, [novedades, audios]);

    return (
        <div className="adminTab">
            <div className="adminTab__tabs">
                <div className={`adminTab__tab adminTab__novedades ${tab === 'novedades' ? 'adminTabs__tab-active' : null}`} onClick={handleTabNovedades}>
                    Novedades
                </div>
                <div className={`adminTab__tab adminTab__homilias ${tab === 'homilias' ? 'adminTabs__tab-active' : null}`} onClick={handleTabHomilias}>
                    Homilías
                </div>
            </div>
            <div className="adminTab__container">
                {success &&
                    <div className="alert alert-success" role="alert">
                        <div className="close-alert" onClick={() => setSuccess(false)}>x</div>
                        {tab === 'novedades' && 'Novedad creada con éxito!'}
                        {tab === 'homilias' && 'Homilía cargada con éxito!'}

                    </div>
                }
                {(!newNovedad && !newHomilia) &&
                    <>
                        {tab === 'novedades' ? <h4>Novedades</h4> : <h4>Homilías</h4>}
                        {tab === 'novedades' ? <button onClick={() => setNewNovedad(true)} className="btn btn-primary">+ Novedad</button> : <button onClick={() => setNewHomilia(true)} className="btn btn-primary">+ Homilía</button>}
                        {isLoading &&
                            <div className="loadingSpinner__container">
                                <ReactLoading type='spin' color='#333' height={220} width={110} />
                            </div>
                        }
                        {!isLoading &&
                            <div className="adminTab__table">
                                {(tab === 'novedades' && novedades) &&
                                    <table className="table table-striped table-responsive">
                                        <thead>
                                            <tr>
                                                <th>Acción</th>
                                                <th>Fecha</th>
                                                <th>Título</th>
                                                <th>Cuerpo</th>
                                                <th>Fotos</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {novedades.map(novedad => (
                                                <tr key={novedad.id}>
                                                    <td>
                                                        <VisibilityIcon className="view-icon" />
                                                        <EditIcon className="view-icon" />
                                                        <DeleteIcon className="delete-icon" />
                                                    </td>
                                                    <td>
                                                        <Moment format="DD/MM/YYYY HH:mm" >
                                                            {secondsToDate(novedad.data.date.seconds)}
                                                        </Moment>
                                                    </td>

                                                    <td>{novedad.data.title}</td>
                                                    {novedad.data.body.length > 24 ?
                                                        <td>{novedad.data.body.substr(0, 25)}...</td>
                                                        :
                                                        <td>{novedad.data.body}</td>
                                                    }
                                                    {/* {console.log(`Novedad: ${novedad.data.title}, imgUrl: ${novedad.data.img}`)} */}
                                                    <td><img src={novedad.data.img[0]} alt={novedad.data.title} /></td>
                                                </tr>
                                            ))}
                                        </tbody>

                                    </table>
                                }
                                {(tab === 'homilias' && audios) &&
                                    <table className="table table-striped table-responsive">
                                        <thead>
                                            <tr>
                                                <th>Acción</th>
                                                <th>Fecha</th>
                                                <th>Título</th>
                                                <th>Audio</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {audios.map(audio => (
                                                <tr key={audio.id}>
                                                    <td>
                                                        <VisibilityIcon className="view-icon" />
                                                        <EditIcon className="view-icon" />
                                                        <DeleteIcon className="delete-icon" />
                                                    </td>
                                                    <td>
                                                        <Moment format="DD/MM/YYYY">
                                                            {audio.data.date}
                                                        </Moment>
                                                    </td>

                                                    <td>{audio.data.title}</td>
                                                    <td>
                                                        <audio controls>
                                                            {/* <source src="horse.ogg" type="audio/ogg" /> */}
                                                            <source src={audio.data.url} type="audio/mpeg" />
                                                    Your browser does not support the audio element.
                                                </audio>
                                                    </td>

                                                </tr>
                                            ))}
                                        </tbody>

                                    </table>
                                }

                            </div>
                        }
                        {tab === 'novedades' &&
                            <div className="adminTab__viewAll">Ver todas las novedades</div>
                        }
                        {tab === 'homilias' &&
                            <div className="adminTab__viewAll">Ver todas las homilías</div>
                        }
                    </>
                }
                {(newNovedad || newHomilia) &&
                    <NewItem tab={tab} handleBack={handleBack} handleSuccessUploading={handleSuccessUploading} />
                }

            </div>



        </div>
    )
}

export default AdminTab;

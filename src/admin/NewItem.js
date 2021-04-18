import React, { useState } from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ImageUpload from './ImageUpload';
import ReactLoading from 'react-loading';
import { storage } from '../firebase';
import db from '../firebase';

import './NewItem.css'

function NewItem(props) {
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [images, setImages] = useState([]);
    const [homiliaDate, setHomiliaDate] = useState();
    const [category, setCategory] = useState();
    const [audio, setAudio] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const onImageInput = (file) => {
        setImages([...images, file]);
    }

    const setupUrls = async () => {
        let imgsUrls = [];
        try {
            for (let i = 0; i < images.length; i++) {
                const name = new Date().toTimeString() + '-' + images[i].name;
                const metadata = {
                    contentType: images[i].type
                };
                await storage.child(`images/${name}`).put(images[i], metadata)
                    .then(async snapshot => {
                        const promise = await snapshot.ref.getDownloadURL();
                        imgsUrls.push(promise);
                    })
                    .catch(err => alert('Algo salió mal. Intente nuevamente más tarde', err))
            }
            return imgsUrls;

        } catch {
            alert('Something went wrong seting up images urls');
        }
    }
    const uploadPosts = () => {
        setupUrls().then((urls) => {
            console.log(urls);
            db.collection("novedades").add({
                title: title,
                body: body,
                category: category,
                date: new Date(),
                img: urls
            })
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    setTitle('');
                    setBody('');
                    setCategory();
                    setImages('');
                    props.handleSuccessUploading();
                    setIsLoading(false);
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                });

        }).catch(err => alert('Algo salió mal. Por favor, volver a intentar!'));
    }

    const uploadAudio = () => {
        const name = new Date().toTimeString() + '-' + audio.name;
        const metadata = {
            contentType: audio.type
        };
        storage.child(`audios/${name}`).put(audio, metadata)
            .then(async snapshot => {
                snapshot.ref.getDownloadURL()
                    .then(url => {
                        db.collection("audios").add({
                            title: title,
                            date: homiliaDate,
                            url: url
                        })
                            .then(function (docRef) {
                                console.log("Document written with ID: ", docRef.id);
                                setTitle('');
                                setHomiliaDate();
                                setAudio();
                                props.handleSuccessUploading();
                                setIsLoading(false);
                            })
                            .catch(function (error) {
                                console.error("Error adding document: ", error);
                            });
                    });
            })
            .catch(err => alert('Algo salió mal. Intente nuevamente más tarde', err))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            props.tab === 'novedades' && uploadPosts();
            props.tab === 'homilias' && uploadAudio();
        } catch {
            alert('Algo malió sal! Probemos más tarde de nuevo!')
            setIsLoading(false);
        }
    }

    return (
        <div className="newItem">
            <p className="newItemForm__back" onClick={props.handleBack}><ArrowBackIcon />Atras</p>
            {props.tab === 'novedades' &&
                <h4>Crear Novedad</h4>
            }
            {props.tab === 'homilias' &&
                <h4>Cargar Homilia</h4>
            }
            <form>
                <div className='form-group'>
                    <label htmlFor="itemTitle">Título</label>
                    <input type="text" placeholder="Ingresar Título..." className="form-control" id="itemTitle" value={title} onChange={(e) => setTitle(e.target.value)} disabled={isLoading} />
                </div>
                {props.tab === 'novedades' &&
                    <>
                        <div className='form-group'>
                            <label htmlFor="novedadBody">Cuerpo</label>
                            <textarea type="text" placeholder="Ingresar Cuerpo..." className="form-control" id="novedadBody" value={body} onChange={(e) => setBody(e.target.value)} disabled={isLoading}></textarea>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="novedadCategory">Categoría</label>

                            <select id="novedadCategory" className="form-control" onChange={(e) => setCategory(e.target.value)} disabled={isLoading}>
                                <option value="default" >Seleccionar Categoría...</option>
                                <option value="matrimonios">Matrimonios</option>
                                <option value="cursos prematrimoniales">Cursos Prematrimoniales</option>
                                <option value="bautismos">Bautismos</option>
                                <option value="reconciliaciones">Reconciliaciones y Charlas Espirituales</option>
                                <option value="visitas a enfermos">Visitas a Enfermos</option>
                                <option value="adoracion">Adoración</option>
                                <option value="liturgia">Liturgia y Espiritualidad</option>
                                <option value="ministros">Ministros</option>
                                <option value="coro">Coro</option>
                                <option value="meditacion">Meditación Cristiana</option>
                                <option value="circulos de oracion">Círculos de Oración</option>
                                <option value="ciclos de conferencias">Cíclos de Conferencias Vida, Fe y Cultura</option>
                                <option value="entretiempo">Entretiempo</option>
                                <option value="oportunidad">Oportunidad</option>
                                <option value="retiros comunitarios">Retiros Comunitarios</option>
                                <option value="confirmacion">Confirmación</option>
                                <option value="post confirmacion">Post Confirmación</option>
                                <option value="mision">Misión</option>
                                <option value="caritas">Cáritas</option>
                                <option value="proyectos de la comunidad">Proyectos de la Comunidad</option>
                            </select>
                        </div>
                        <div className="newItem__images-upload">
                            <h6>Fotos (max. 3)</h6>
                            <div className="newItem__images-upload-container">
                                <ImageUpload onImageInput={onImageInput} isLoading={isLoading} />
                                <ImageUpload onImageInput={onImageInput} isLoading={isLoading} />
                                <ImageUpload onImageInput={onImageInput} isLoading={isLoading} />
                            </div>
                        </div>
                    </>
                }
                {props.tab === 'homilias' &&
                    <>
                        <div className='form-group newItem__homiliaFileSelect'>
                            <label htmlFor="homiliaDate">Fecha:</label>
                            <input type="date" value={homiliaDate} className="form-control" id="homiliaDate" onChange={e => setHomiliaDate(e.target.value)} />
                        </div>
                        <div className="form-group ">
                            <label htmlFor="homiliaAudio">Audio:</label>
                            <br />
                            <input type="file" className="newItem__homilia-upload" onChange={e => setAudio(e.target.files[0])} id="homiliaAudio" />
                        </div>
                    </>
                }
                <div className="newItem__submitContainer">
                    <button type="submit" className="btn btn-primary" onClick={handleFormSubmit} disabled={isLoading}>{isLoading ? 'Cargando...' : 'Crear'}</button>
                    {isLoading &&
                        <ReactLoading type='bubbles' color='#007bff' height={30} width={50} />
                    }
                </div>
            </form>

        </div>
    )
}

export default NewItem;

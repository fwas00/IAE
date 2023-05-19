import style from './gallery.css';

export default function Galeria(){
    return (<>
        <section className={style.row}>
            <h1 className={style.h1}>Gallery</h1>
        </section>
        <section className={style.row}>
            <div className={style.grid}>
                <section className={style.col_2_2}> 
                    <section className={style.block}>
                        <section className={style.block_descricao}> 
                            
                        </section> 
                    </section>
                    <section className={style.txt}>    
                    </section>
                </section>
            </div>
        </section>

       

        <footer className={style.footer}>

            <small>&copy; I.A. Experience</small>

            <nav className={style.nav}/>

        </footer>
    </>)
}
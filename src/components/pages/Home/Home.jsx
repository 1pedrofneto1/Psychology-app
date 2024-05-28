import styles from "./Home.module.css";
import { RiPsychotherapyLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section className={styles.homepage}>
            <RiPsychotherapyLine />
            <h1>Clínica</h1>
            <Link className={styles.psychologist_btn} to="login" >
                Área do Psicólogo
            </Link>
            <Link className={styles.patient_btn} to="login" >
                Área do Paciente
            </Link>
        </section>
    )
}

export default Home
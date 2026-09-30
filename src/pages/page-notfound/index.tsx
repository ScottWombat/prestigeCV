import { FlowerCart } from "@components/svg/flower-cat";
import styles from './index.module.css'
const PageNotFound = () =>{
    return(
        <div className={styles.wrapper}>
        <div className={styles.cat}><FlowerCart/></div>
        <div className={styles.text}>
            <div className={styles.shadow}>Page Not Found</div>
        </div>
        </div>
    )
}
export default PageNotFound;

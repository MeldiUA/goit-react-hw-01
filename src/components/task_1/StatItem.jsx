import css from './StatsItem.module.css'

export const StatsItem = ({name, value}) =>{
    return(
            <li className={css.item}>
                <span className={css.nameStat}>{name}</span>
                <span className={css.valueStat}>{value}</span>
            </li>
    )
}
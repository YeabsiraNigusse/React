

export default function List(){
    const family = ['Nigusse', 'Tsehay', 'Mekides', 'Meaza', 'Yeabsira', 'Bereket']
    
    const name = family.map(fam =>
        
        <li 
        key={fam.indexOf(fam)}
        >
       {fam}
        </li>
        )

        return(
            <ul>{name}</ul>
        )

}
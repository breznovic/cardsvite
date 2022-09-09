import React, {ChangeEvent, useState} from 'react'

type PropsType = {
    title: string
    onChange: (newTitle: string, id: string) => void
}

export const Span = (props: PropsType) => {

    const [edit, setEdit] = useState(false)
    const [editIngredient, setEditIngredient] = useState('')

    const activateEditMode = () => {
        setEdit(true)
        setEditIngredient(props.title)
    }

    const activateViewMode = () => {
        setEdit(false)
        props.onChange(editIngredient)
    }

    const changeIngredientTitle = (e: ChangeEvent<HTMLInputElement>) => setEditIngredient(e.target.value)

    return edit ? <input value={editIngredient} onBlur={activateViewMode} autoFocus onChange={changeIngredientTitle}/> :
        <span onDoubleClick={activateEditMode}>{props.title}</span>
}
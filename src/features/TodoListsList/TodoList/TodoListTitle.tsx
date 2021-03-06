import s from "./TodoListTitle.module.css"
import React from "react"
import { EditableSpan } from "../../../Components/EditableSpan/EditableSpan"
import Delete from '@mui/icons-material/Delete'
import { IconButton } from "@mui/material"


type TodoListTitlePropsType = {
    title: string
    onChangeCallBack: (title: string) => void
    callBack: () => void
    disabled?: boolean
}

export const TodoListTitle: React.FC<TodoListTitlePropsType> = React.memo( ({
                                                                                title,
                                                                                onChangeCallBack,
                                                                                callBack,
                                                                                disabled,
                                                                                ...props
                                                                            }) => {

    return (
        <>
            <div className={ s.title }>
                <EditableSpan title={ title } callBack={ onChangeCallBack } disabled={disabled}/>
                <IconButton disabled={disabled} color="primary" size='small' onClick={ callBack }>
                    <Delete/>
                </IconButton>
            </div>
        </>
    )
} )


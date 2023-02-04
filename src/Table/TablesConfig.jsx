import React, {Fragment, useState} from "react";
import "./tableStyle.css"
import s from "../Modal/modal.module.css";
import addImg from "../images/add.png"
import deleteImg from "../images/minus-sign.png"
import * as lodash from "lodash";
import {Pagination} from "@mui/material";

function TablesConfig(props) {
    const [columns, setColumns] = useState(props.data.body)
    const [open, setOpen] = useState(false)
    const [modalState, setModalState] = useState({
        id: 1, rowDataField: "data", rowCaption: "row_1", rowFormat: "format"
    })
    const [page, setPage] = useState(1)
    const countPage = Math.ceil(props.data.body[0].items.length / 20)

    function addColumn() {
        const copy = lodash.cloneDeep(columns)
        setColumns([...copy, {
            id: Math.random(),
            columnDataField: "data",
            columnCaption: "new Column",
            columnDataType: "dataType",
            columnFormat: "format",
            columnAlignment: "center",
            items: [...props.data.body[0].items]
        }])
    }

    function handleDeleteColumn(id) {
        const copy = lodash.cloneDeep(columns).filter((item, index) => id !== item.id)
        setColumns(copy)
    }

    function handleChangePage(event, value) {
        setPage(value)
    }

    return (
        <>
            <div className="header">
                <div className="Title">Table task</div>
                <div className="typography">Page: {page}</div>
                {
                    Boolean(columns.length) &&
                    <Pagination
                        className="pagination"
                        count={countPage}
                        variant="outlined"
                        size="small"
                        page={page}
                        onChange={handleChangePage}
                    />
                }
            </div>
            <div className="tableWrapper">
                {columns.map((col) => {
                    return (
                        <div className="columnOne" key={col.id}>
                            <div className="column" align={col.columnAlignment}>
                                <input type="text" defaultValue={col.columnCaption}/>
                                <img
                                    className="deleteImg"
                                    onClick={() => handleDeleteColumn(col.id)}
                                    src={deleteImg}
                                />
                            </div>
                            {col.items.filter(col => (col.id > ((page - 1) * 20) && (col.id < (page) * 20 + 1))).map((row) => {
                                return (
                                    <Fragment key={row.id}>
                                        <div
                                            onDoubleClick={() => {
                                                setModalState({
                                                    id: row.id,
                                                    rowDataField: row.rowDataField,
                                                    rowCaption: row.rowCaption,
                                                    rowFormat: row.rowFormat
                                                })
                                                setOpen(true)
                                            }}
                                            className="row"
                                        >
                                            {row.rowCaption}
                                        </div>
                                    </Fragment>
                                )
                            })}
                        </div>
                    )
                })}
                <div className="addColumn" onClick={() => addColumn()}>
                    Add new Column
                    <img className="addImg" src={addImg}/>
                </div>
            </div>
            <div>
                {
                    open &&
                    ( //MODAL
                        <div className={s.overlay}>
                            <div className={s.modal}>
                                <svg
                                    className={s.svg}
                                    onClick={() => {
                                        setOpen(false)
                                    }}
                                    height="200"
                                    viewBox="0 0 200 200"
                                    width="200"
                                >
                                    <title/>
                                    <path
                                        d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"
                                    />
                                </svg>
                                <div className={s.modalText}>
                                    Cell information: <br/>
                                    id - {modalState.id}{' '},
                                    Caption - {modalState.rowCaption},
                                    rowFormat: {modalState.rowFormat}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default TablesConfig
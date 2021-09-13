import {useState, useEffect, useRef} from 'react'
import axios from "../../../axios";
import Box from "@material-ui/core/Box";
import SaveButton from "../Button/SaveButton";
import InputValidator from "../FormValidator/InputValidator";
import {Typography} from "@material-ui/core";


class CustomUploadAdapter {
    constructor(loader) {
        this.loader = loader;
    }


    upload() {
        return this.loader.file
            .then(uploadedFile => {
                return new Promise((resolve, reject) => {
                    const data = new FormData();
                    data.append('upload', uploadedFile);
                    axios.post('/upload', data)
                        .then(response => {
                            if (response.data.errors) reject(response.data.message);
                            else {
                                resolve({
                                    default: process.env.REACT_APP_PUBLIC_URL + response.data.url
                                });
                            }
                        })
                        .catch(error => reject('upload failed'))
                })
            })
    }

    abort() {
        console.log('abort')
    }
}

export default function FullEditor({value, onChange, showSubmitButton, onSubmit, name}) {

    const editorRef = useRef()
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [editor, setEditor] = useState(null);
    let {CKEditor, CustomEditor} = editorRef.current || {}

    function MyCustomUploadAdapterPlugin(editor) {
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return new CustomUploadAdapter(loader);
        };
    }

    const editorConfiguration = {
        extraPlugins: [MyCustomUploadAdapterPlugin],
        toolbar: {
            items: [
                'heading',
                '|',
                'bold',
                'underline',
                'italic',
                'link',
                'bulletedList',
                'numberedList',
                '|',
                'outdent',
                'indent',
                '|',
                'imageUpload',
                'blockQuote',
                'insertTable',
                'mediaEmbed',
                'undo',
                'redo',
                'alignment',
                'code',
                'codeBlock',
                'fontColor',
                'fontBackgroundColor',
                'findAndReplace',
                'fontSize',
                'highlight',
                'horizontalLine',
                'htmlEmbed',
                'imageInsert',
                'sourceEditing',
                'specialCharacters',
                'restrictedEditingException',
                'strikethrough',
                'subscript',
                'superscript',
                'textPartLanguage',
                'todoList'
            ]
        },
        language: {
            ui: 'en',
            content: 'fa'
        },
        image: {
            toolbar: [
                'imageTextAlternative',
                'imageStyle:inline',
                'imageStyle:block',
                'imageStyle:side',
                'linkImage'
            ]
        },
        table: {
            contentToolbar: [
                'tableColumn',
                'tableRow',
                'mergeTableCells',
                'tableCellProperties',
                'tableProperties'
            ]
        },
    };

    useEffect(() => {
        editorRef.current = {
            CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
            CustomEditor: require('ckeditor5-custom-build/build/ckeditor')
        }
        setEditorLoaded(true)
    }, [])


    const onSetDescription = text => {
        setDescription(text)
    }

    const [description, setDescription] = useState(null);

    return editorLoaded ?
        <>
            <Box hidden>
                <InputValidator
                    multiline
                    defaultValue={value ?? null}
                    value={description || value}
                    name={name ?? 'description'}
                />
            </Box>
                <Typography align={"left"}>متن</Typography>
            <CKEditor
                editor={CustomEditor}
                data={value || ''}
                onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    setEditor(editor)
                    // editor.ui
                    //     .getEditableElement()
                    //     .parentElement.prepend(editor.ui.view.toolbar.element);
                    // console.log('Editor is ready to use!', editor)
                }}

                config={editorConfiguration}
                onChange={(event, editor) => {
                    const data = editor.getData()
                    onSetDescription(data)
                    // console.log({event, editor, data})
                }}
                onBlur={(event, editor) => {
                    // console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    // console.log('Focus.', editor);
                }}
            />
            {
                showSubmitButton ? <Box align='left' mt={7}>
                    <SaveButton onClick={(e) => onSubmit(e, editor)}/>
                </Box> : null
            }
            <br/>
        </>

        : <div>Editor loading</div>
};


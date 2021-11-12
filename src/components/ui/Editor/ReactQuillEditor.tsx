import { useEffect, useRef } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'
// import { WebsocketProvider } from 'yjs/provider/websocket'
import { QuillBinding } from 'y-quill'

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
    ['clean'],
  ],
}

const QuillEditor = () => {
  const reactQuillRef = useRef<ReactQuill | null>(null)
  const docRef = useRef<Y.Doc>(new Y.Doc())
  const shared = useRef<Y.Text>(docRef.current.getText('quill'))

  useEffect(() => {
    const provider = new WebrtcProvider('quill-demo-x', docRef.current)
    reactQuillRef?.current &&
      new QuillBinding(
        shared.current,
        reactQuillRef.current.getEditor(),
        provider?.awareness
      )
  }, [reactQuillRef])

  return (
    <div>
      <ReactQuill ref={reactQuillRef} theme={'snow'} modules={modules} />
    </div>
  )
}

export default QuillEditor

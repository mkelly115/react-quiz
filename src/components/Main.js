export default function Main({ children }) {
  return <main className='main'>{children}</main>;
}

// "reactComponent" : {
//     "prefix": "rfc",
//     "scope": "javascript, typescript, javascriptreact",
//     "body": [
//         "function ${1:${TM_FILENAME_BASE}}(){",
//         "\treturn (",
//         "\t\t<div>",
//         "\t\t\t$0",
//         "\t\t</div>",
//         "\t)",
//         "}",
//         "",
//         "export default ${1:${TM_FILENAME_BASE}}",
//         ""
//     ],
//     "description": "React Component"
// }

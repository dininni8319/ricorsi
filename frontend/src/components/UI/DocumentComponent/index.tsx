
const DocumentComponent = ({ documents }: { documents: any }) => {
    return (
      <ul className='ul-files-class'>
          {
            documents?.map((document: any) => {
                return (
                    <li key={document.id} className='files-style'>
                      <a href={`http://localhost:8000/${document.path}`} target='_blank'>{document.nome_file}</a> 
                    </li> 
                )
            })
          }
      </ul>
    );
};

export default DocumentComponent;

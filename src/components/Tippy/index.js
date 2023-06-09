import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css'

function TippyCustom({children,content}) {
    return ( 
        <Tippy content={content}>
            {children}
        </Tippy>
     );
}

export default TippyCustom;
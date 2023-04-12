import React from 'react'
import Materi from '../components/Materi'
import TombolActiontop from '../components/TombolActiontop'
import TombolActionbtm from '../components/TombolActionbtm'





export const MateriQuiz = () => {
    return (
        <div className="bg-slate-300">
            {/* navbar section */}
            <div>
                <TombolActiontop />
            </div>
            {/* end navbar section */}

            {/* materisection */}
            <div>
                <Materi />
            </div>
            {/* end materi section */}

            {/* tombol section */}
            <TombolActionbtm />
            {/* end tombol section */}

        </div>

    )
}

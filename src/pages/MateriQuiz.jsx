import React from 'react'
import NavBar from '../components/NavBar'
import Materi from '../components/Materi'




export const MateriQuiz = () => {
    return (
        <div className="bg-primary">
            {/* navbar section */}
            <div>
                <NavBar />
            </div>
            {/* end navbar section */}

            {/* materisection */}
            <div>
                <Materi />
            </div>
            {/* end materi section */}

        </div>

    )
}

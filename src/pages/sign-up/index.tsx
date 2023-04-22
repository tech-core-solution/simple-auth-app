import React from 'react'

import BoxContainer from '@/components/box-container'
import Registration from '@/components/forms/registration'

function SignUp() {
  return (
    <main className="w-screen h-auto min-h-screen grid place-content-center ">
      <BoxContainer styles="mx-auto w-[90vw] max-w-[30rem] grid place-content-center">
        <Registration />
      </BoxContainer>
    </main>
  )
}

export default SignUp
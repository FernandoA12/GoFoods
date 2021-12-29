import { useEffect } from "react"
import Image from 'next/image'

export default function Login() {
  useEffect(() => {
    document.title = 'Entre - GoFoods'
  }, [])
  return(
    <div className="w-full h-screen flex justify-center items-center flex-col">
       <Image
        src="/logo.png"
        alt="Logo"
        width={300}
        height={300}
      />
      <form className="">
        <div>
          <span>Usuário</span>
          <input name="user" />
        </div>
        <div>
          <span>Senha</span>
          <input name="pass" />
        </div>
        <button>
          Entrar
        </button>
      </form>
    </div>
  )
}
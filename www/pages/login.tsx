import { useState, FunctionComponent  } from "react";
import Link from "next/link";
import Router from "next/router";
import Layout from "../components/Layout";
import { useAuth } from "../auth";
import Image from 'next/image'

const loginApi = async (username: string, password: string): Promise<void> => {
  const resp = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (resp.status !== 200) {
    throw new Error(await resp.text());
  }
  Router.push("/me");
};

const Login: FunctionComponent  = (): React.ReactElement => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { loading, isAuthenticated, login } = useAuth();

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setErrorMessage("");
    try {
      const resp = await login(username, password);
      if (resp.status === 401) {
        setErrorMessage("Invalid login credentials");
      }
    } catch (error) {
      console.error(error);
      // TODO: actually parse api 400 error messages
      setErrorMessage(error.message);
    }
  };

  if (!loading && isAuthenticated) Router.push("/");

  return (
    <Layout>
      <div className="flex w-full">
        <form className="w-1/2 pt-4 ml-28" onSubmit={handleSubmit}>
          <h1 className="text-black text-4xl font-semibold mt-10 mb-6">Welcome</h1>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/3">
              <input
                type="text"
                className="appearance-none border-1 border-gray-200 rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="username"
                name="username"
                placeholder="Email"
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUsername(e.target.value)
                }
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/3">
              <input
                type="password"
                className="appearance-none border-1 border-gray-200 rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-2/3">
              <button
                className="w-full shadow bg-primary-color hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-6 rounded"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
          {errorMessage ? (
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3 pt-4">
                <p className="text-red-400">Error: {errorMessage}</p>
              </div>
            </div>
          ) : null}
          <div className="md:flex md:items-center">
            <div className="md:w-2/3 pt-4">
              <p className="flex justify-center text-black font-medium">
                <Link href="/signup" legacyBehavior>
                  <a className="underline underline-offset-4">Forgot Password?</a>
                </Link>
              </p>
            </div>
          </div>
        </form>
        <Image
          src="/images/login.png"
          width={300}
          alt="Logo"
          height={300}
          className="w-1/2"
        />
      </div>
    </Layout>
  );
};

export default Login;
import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import Back from "../components/Back";

const Licences = () => {
  const theme = useSelector((state) => state.theme);
  useEffect(() => {
    window.scroll(0,0)
  }, [])
  return (
    <div className={"licences " + theme}>
      <Header />
      <Back />
      <h2>
        Plusieurs des animations utilisées sur ce site proviennent du site{" "}
        <a target="_blank" rel="noreferrer" href="https://uiverse.io/">
          uiverse.io
        </a>
        <h3>Toggle button pour changer le theme : </h3>
        <p>
          Copyright - 2023 Madflows (Folarin Lawal) Permission is hereby
          granted, free of charge, to any person obtaining a copy of this
          software and associated documentation files (the “Software”), to deal
          in the Software without restriction, including without limitation the
          rights to use, copy, modify, merge, publish, distribute, sublicense,
          and/or sell copies of the Software, and to permit persons to whom the
          Software is furnished to do so, subject to the following conditions:
          The above copyright notice and this permission notice shall be
          included in all copies or substantial portions of the Software. THE
          SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
          TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
          SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
        <h3>
          Animation hover sur les couvertures des projets qui devoilent du texte
          :{" "}
        </h3>
        <p>
          Copyright - 2023 gharsh11032000 (Harsh Gupta) Permission is hereby
          granted, free of charge, to any person obtaining a copy of this
          software and associated documentation files (the “Software”), to deal
          in the Software without restriction, including without limitation the
          rights to use, copy, modify, merge, publish, distribute, sublicense,
          and/or sell copies of the Software, and to permit persons to whom the
          Software is furnished to do so, subject to the following conditions:
          The above copyright notice and this permission notice shall be
          included in all copies or substantial portions of the Software. THE
          SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
          TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
          SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
        <h3>Le filtre des projets : </h3>
        <p>
          Copyright - 2023 Yaya12085 (Yaya Mohamed) Permission is hereby
          granted, free of charge, to any person obtaining a copy of this
          software and associated documentation files (the “Software”), to deal
          in the Software without restriction, including without limitation the
          rights to use, copy, modify, merge, publish, distribute, sublicense,
          and/or sell copies of the Software, and to permit persons to whom the
          Software is furnished to do so, subject to the following conditions:
          The above copyright notice and this permission notice shall be
          included in all copies or substantial portions of the Software. THE
          SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
          TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
          SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
      </h2>
      <Footer />
    </div>
  );
};

export default Licences;

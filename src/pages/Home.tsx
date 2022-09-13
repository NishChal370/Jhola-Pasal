import { Stack } from "@mui/material"
import { About, AboutProduct, Deals, Header, Services } from "../components";

function Home() {
      return (
            <Stack spacing={16}>
                  <Header/>

                  <Services/>

                  <About/>

                  <Deals/>

                  <AboutProduct/>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
            </Stack>
      )
}

export default Home
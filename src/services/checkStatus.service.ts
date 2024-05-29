import axios, { AxiosInstance } from "axios";
import { getAuthorizationHeader } from "./getAuthorizationHeader";

export class Check{
    protected readonly instance: AxiosInstance;
    public constructor(url: string) {
        this.instance = axios.create({
          baseURL: url,
          timeout: 30000,
          timeoutErrorMessage: "Time out!",
          headers: {
            'Access-Control-Allow-Origin': '*', // Allow all origins
          },
          
        });
    }

    checkIsProfessional = async(id:string)=>{
        let res
        try{
            res = await this.instance
            .get(`/professionals/${id}`,{
                headers: getAuthorizationHeader(),
            })

            return res.status
        }catch(error){
            return null
        }
        
    }

}
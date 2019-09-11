export function GetDistrictsList() {
     let BaseUrl = 'http://boxfarming.in/jslps/index.php/jslps_livelihood/master_district_list';

    return new Promise((resolve,reject) => {

        fetch(BaseUrl,{
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify()
        })
        .then((response) => {
            return response.json();
          })
          .then((jsonObject) => {
            resolve(jsonObject);
          })
          .catch((error) => {
            document.write(error);
          });
    });
}

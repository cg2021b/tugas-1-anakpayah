function main() {
    /**
     * @type {HTMLCanvasElement} canvas
     */
    var canvas = document.getElementById("myCanvas");
  
    /**
     * @type {WebGLRenderingContext} gl
     */
    var gl = canvas.getContext("webgl");
    if (!gl) {
      console.log("Browser only support experimental WebGl");
      gl = canvas.getContext("experimental-webgl");
    }
  
    var vertices = [
      
    // gambar 1
      // gambar kiri
      -0.7,-0.17, 0.64,0.66,0.63,
      -0.7075555405889,-0.167611996904, 0.64,0.66,0.63,
      -0.7141706462212,-0.1645406978604, 0.64,0.66,0.63,
      -0.7218488938301,-0.1586343535459, 0.64,0.66,0.63,
      -0.7283458725761,-0.1526098823451, 0.64,0.66,0.63,
      -0.7315734753359,-0.1472049174094, 0.64,0.66,0.63,
      -0.7359371068657,-0.1362958385848, 0.64,0.66,0.63,
      -0.7364504870347,0.0956315007972, 0.64,0.66,0.63,
      -0.74,0.098, 0.64,0.66,0.63,
      -0.7450812067325,0.1018355800755, 0.64,0.66,0.63,
      -0.75,0.106, 0.64,0.66,0.63,
      -0.7552147399938,0.1106909049343, 0.64,0.66,0.63,
      -0.7598509519272,0.1167131336292, 0.64,0.66,0.63,
      -0.7631206171123,0.123413751743, 0.64,0.66,0.63,
      -0.7634417597147,0.1294619374212, 0.64,0.66,0.63,
      -0.7620340711986,0.1364420633418, 0.64,0.66,0.63,
      -0.7571532351576,0.1452607353558, 0.64,0.66,0.63,
      -0.745,0.155, 0.64,0.66,0.63,
      -0.73,0.165, 0.64,0.66,0.63,
      -0.7084506474998,0.1735834567723, 0.64,0.66,0.63,
      -0.6680171556381,0.1829046087921, 0.64,0.66,0.63,
      -0.608217243673,0.1896021989322, 0.64,0.66,0.63,
      -0.5390737579972,0.1913018795968, 0.64,0.66,0.63,
      -0.4901197154329,0.1871127197382, 0.64,0.66,0.63,
      -0.4460025535873,0.1806422026676, 0.64,0.66,0.63,
      -0.4035520400781,0.1701521219621, 0.64,0.66,0.63,
      -0.3693367301134,0.1580934310576, 0.64,0.66,0.63,
      -0.3523761323372,0.1495641131008, 0.64,0.66,0.63,
      -0.3383566786841,0.1388779561204, 0.64,0.66,0.63,
      -0.3337488862247,0.1321133246374, 0.64,0.66,0.63,
      -0.3311018565139,0.1248585024673, 0.64,0.66,0.63,
      -0.3309305301366,0.1192072800737, 0.64,0.66,0.63,
      -0.3322099245724,0.114483362157, 0.64,0.66,0.63,
      -0.3350233820113,0.1092704386152, 0.64,0.66,0.63,
      -0.3383566786841,0.1044665698809, 0.64,0.66,0.63,
      -0.3411017465323,0.1000548536963, 0.64,0.66,0.63,
      -0.3386819968225,0.0968198391869, 0.64,0.66,0.63, //t2
      -0.3441639800857,0.064606530258, 0.64,0.66,0.63, //l3
      -0.3620111790881,0.0483575878826, 0.64,0.66,0.63,
      -0.3699740113397,-0.1441765677471, 0.64,0.66,0.63,
      -0.3724310057777,-0.1515161696684, 0.64,0.66,0.63,
      -0.38,-0.16, 0.64,0.66,0.63,
      -0.3873388219419,-0.1661427062823, 0.64,0.66,0.63,
      -0.3943708106986,-0.1692367813353, 0.64,0.66,0.63,
      -0.4081535086618,-0.1706431790866, 0.64,0.66,0.63,
      -0.3386819968225,0.0968198391869, 0.64,0.66,0.63, //t2
      -0.3441639800857,0.064606530258, 0.64,0.66,0.63, //m3
      -0.333235468233,0.0941701766298, 0.64,0.66,0.63,
      -0.314835033809,0.0918149210236, 0.64,0.66,0.63,
      -0.2509323435057,0.0877812513507, 0.64,0.66,0.63,
      -0.1704867599424,0.0771262071702, 0.64,0.66,0.63,
      -0.1369233707737,0.0555497427045, 0.64,0.66,0.63,
      -0.1347923619375,0.0507549728232, 0.64,0.66,0.63,
      -0.1347923619375,0.0438291941059, 0.64,0.66,0.63,
      -0.1382552512962,0.0318422694027, 0.64,0.66,0.63,
      -0.1728899566222,0.0510646445284, 0.64,0.66,0.63,
      -0.2504295415036,0.0620059097122, 0.64,0.66,0.63,
      -0.3340416881142,0.0670039151986, 0.64,0.66,0.63,
      -0.3441639800857,0.064606530258, 0.64,0.66,0.63, //l3
      -0.3340416881142,0.0670039151986, 0.64,0.66,0.63, //k2
      -0.3386819968225,0.0968198391869, 0.64,0.66,0.63, //t2
      



    
    //gambar 2
      // Lingkaran kecil
      0.5374210767603,-0.4642820884192,  0.1,0.1,0.1,
      0.5474261334966,-0.4598353965364,  0.1,0.1,0.1,
      0.5520951599736,-0.4516090165532,  0.1,0.1,0.1,
      0.5485378064673,-0.4404922868462,  0.1,0.1,0.1,
      0.5371987421662,-0.4347115873986,  0.1,0.1,0.1,
      0.5274160200241,-0.4376019371224,  0.1,0.1,0.1,
      0.5229693281413,-0.4482739976411,  0.1,0.1,0.1,
      0.5267490162416,-0.4573897160008,  0.1,0.1,0.1,
      //cebok // ke 67
      0.5429561161411,-0.4930171806948,  0.45,0.52,0.48,
      0.557186625581,-0.489857222897,  0.45,0.52,0.48,
      0.5711054345038,-0.4806608670015,  0.45,0.52,0.48,
      0.5780648389653,-0.4717130612654,  0.45,0.52,0.48,
      0.5825387418333,-0.4627652555292,  0.45,0.52,0.48,
      0.5857698939047,-0.4458638446943,  0.45,0.52,0.48,
      0.5638974798831,-0.1185232848472,  0.45,0.52,0.48, //m4
      0.5648916805204,-0.1016218740123,  0.45,0.52,0.48,
      0.5699512398411,-0.0879326503401,  0.45,0.52,0.48,
      0.5791581346465,-0.0721274809242,  0.45,0.52,0.48,
      0.5862167539973,-0.0639947238461,  0.45,0.52,0.48,
      0.6057046813353,-0.0512585193654,  0.45,0.52,0.48,
      0.6244867467382,-0.0417841861871,  0.45,0.52,0.48,
      0.6510113722489,-0.024985256697,  0.45,0.52,0.48,
      0.6739993810249,-0.0074790038599,  0.45,0.52,0.48,
      0.6968105589641,0.0158626665895,  0.45,0.52,0.48,
      0.7160851201685,0.0397348295491,  0.45,0.52,0.48,
      0.7314694029647,0.0646679775291,  0.45,0.52,0.48,
      0.741371929822,0.0922535880603,  0.45,0.52,0.48,
      0.7480915016181,0.122137999469,  0.45,0.52,0.48,
      0.75,0.14,  0.45,0.52,0.48,
      0.7490324839401,0.1599569747211,  0.45,0.52,0.48,
      0.7449085465568,0.1806690064292,  0.45,0.52,0.48,
      0.74,0.2,  0.45,0.52,0.48,
      0.7314694029647,0.2209864372055,  0.45,0.52,0.48,
      0.72,0.24,  0.45,0.52,0.48,
      0.7065362549846,0.2568830970633,  0.45,0.52,0.48,
      0.6946885889232,0.2699685789819,  0.45,0.52,0.48,
      0.6780664902698,0.2851760309413,  0.45,0.52,0.48,
      0.6568467898613,0.300913975411,  0.45,0.52,0.48,
      0.632090472718,0.3134689648194,  0.45,0.52,0.48,
      0.6083951405951,0.3246093075339,  0.45,0.52,0.48,
      0.5744436199414,0.3330971876973,  0.45,0.52,0.48,
      0.547742163594,0.3361033119219,  0.45,0.52,0.48,
      0.5266992940222,0.3369874661056,  0.45,0.52,0.48,
      0.5053027627769,0.3361033119219,  0.45,0.52,0.48,
      0.473473212164,0.329914232636,  0.45,0.52,0.48,
      0.4474790791636,0.3223105066563,  0.45,0.52,0.48,
      0.4036250316525,0.3032127762886,  0.45,0.52,0.48,
      0.3847041321216,0.2917187719007,  0.45,0.52,0.48,
      0.3737406202438,0.2849992001046,  0.45,0.52,0.48,
      0.3541123973659,0.2682002706145,  0.45,0.52,0.48,
      0.3373134678758,0.2506940177774,  0.45,0.52,0.48,
      0.3219291850796,0.2324804415934,  0.45,0.52,0.48,
      0.3093741956712,0.2126753878788,  0.45,0.52,0.48,
      0.2987643454669,0.1925166724907,  0.45,0.52,0.48,
      0.2862257430073,0.1589528493266,  0.45,0.52,0.48,
      0.2831267008431,0.1248633855198,  0.45,0.52,0.48,
      0.2859690429514,0.0907174585815,  0.45,0.52,0.48,
      0.2965603259178,0.0525888399024,  0.45,0.52,0.48,
      0.312800293133,0.0179906488788,  0.45,0.52,0.48,
      0.3325706880037,-0.0053101736474,  0.45,0.52,0.48,
      0.3603433855601,-0.0300231672357,  0.45,0.52,0.48,
      0.3862331883669,-0.0455570489197,  0.45,0.52,0.48,
      0.4057682213938,-0.0552068845114,  0.45,0.52,0.48,
      0.4323641097317,-0.0657981674778,  0.45,0.52,0.48,
      0.446956544041,-0.0728590227887,  0.45,0.52,0.48,
      0.4559002941015,-0.0770955359753,  0.45,0.52,0.48,
      0.4648440441621,-0.0834503057552,  0.45,0.52,0.48,
      0.4693159191923,-0.0886282663165,  0.45,0.52,0.48,
      0.4751999652848,-0.0973366545333,  0.45,0.52,0.48,
      0.4768474981907,-0.1013378058762,  0.45,0.52,0.48,
      0.4780243074092,-0.1055743190628,  0.45,0.52,0.48,
      0.4792011166276,-0.1100461940931,  0.45,0.52,0.48, //t8
      0.5638974798831,-0.1185232848472,  0.45,0.52,0.48, //m4
      
      0.4902631232815,-0.4400234989579,  0.64,0.66,0.63, //u8
      0.4916752943437,-0.4524976766739,  0.64,0.66,0.63,
      0.4965190440338,-0.4672635878163,  0.64,0.66,0.63,
      0.5051689905593,-0.4766003021648,  0.64,0.66,0.63,
      0.5145096283435,-0.4846672166149,  0.64,0.66,0.63,
      0.5245578902024,-0.4899036347667,  0.64,0.66,0.63,
      0.5355968257656,-0.4928756558799,  0.64,0.66,0.63, //i9

      0.5429561161411,-0.4930171806948,  0.64,0.66,0.63, //d4
      0.557186625581,-0.489857222897,  0.64,0.66,0.63,
      0.5711054345038,-0.4806608670015,  0.64,0.66,0.63,
      0.5780648389653,-0.4717130612654,  0.64,0.66,0.63,
      0.5825387418333,-0.4627652555292,  0.64,0.66,0.63,
      0.5857698939047,-0.4458638446943,  0.64,0.66,0.63, //l4
      
      0.5648916805204,-0.1016218740123,  0.64,0.66,0.63, //o4
      0.5857698939047,-0.4458638446943,  0.64,0.66,0.63, //l4
      0.4902631232815,-0.4400234989579,  0.64,0.66,0.63, //u8
      0.4792011166276,-0.1100461940931,  0.64,0.66,0.63, //t8

     0.479616316017,-0.049088893016,  0.56, 0.67, 0.6,
     0.5054041095991,-0.0669012163206,  0.56, 0.67, 0.6,
     0.5374000757104,-0.0669012163206,  0.56, 0.67, 0.6,
     0.5660531796906,-0.0431514519145,  0.56, 0.67, 0.6,
     0.6152410081899,-0.0208860477837,  0.56, 0.67, 0.6,
     0.6520124916312,0.0068220106901,  0.56, 0.67, 0.6,
     0.6787553886794,0.0310665618547,  0.56, 0.67, 0.6,
     0.6610859745583,0.1018210683147,  0.56, 0.67, 0.6,
     0.6013920079328,0.1488258103685,  0.56, 0.67, 0.6,
     0.5426531447734,0.1646589866393,  0.56, 0.67, 0.6,
     0.4700652813569,0.1414040089916,  0.56, 0.67, 0.6,
     0.4304284875176,0.1122115902424,  0.56, 0.67, 0.6,
     0.4089386595325,0.0716390760486,  0.56, 0.67, 0.6,
     0.3998651766054,0.0320561353716,  0.56, 0.67, 0.6,
     0.4060733491344,-0.024349555093,  0.56, 0.67, 0.6,
     0.4395019704447,-0.0396879446053,  0.56, 0.67, 0.6,


    ];
  
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  
    var vertexShaderSource = `
      attribute vec2 aPosition;
      attribute vec3 aColor;
      varying vec3 vColor;
      uniform mat4 uChanged;
      void main(){
          gl_Position = uChanged * vec4(aPosition,0,1);
          vColor = aColor;
      }
    `;
  
    var fragmentShaderSource = `
      precision mediump float;
      varying vec3 vColor;
      void main(){
          gl_FragColor = vec4(vColor, 1.0);
      }
    `;
  
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
  
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      console.error("ERROR compiling vertex shader!", gl.getShaderInfoLog(vertexShader));
      return;
    }
  
    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      console.error("ERROR compiling fragment shader!", gl.getShaderInfoLog(fragmentShader));
      return;
    }
  
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
  
    gl.linkProgram(shaderProgram);
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      console.error("ERROR validating program!", gl.getProgramInfoLog(shaderProgram));
      return;
    }
  
    gl.validateProgram(shaderProgram);
    gl.useProgram(shaderProgram);
  
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, gl.FALSE, 5 * Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(aPosition);
  
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, gl.FALSE, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);
  
    var speed = 0.0234;
    var change = 0;
    var uChanged = gl.getUniformLocation(shaderProgram, "uChanged");
  
    function render() {
      if (change >= 0.6 || change < -0.4) speed = -speed;
      change += speed;
      // gl.uniform1f(uChange, change);
      gl.clearColor(0.0, 0.1, 0.15, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
  
      const kiri = [
              1, 0, 0, 0,
              0, 1, 0, 0,
              0, 0, 1, 0,
              0, 0, 0, 1,
          ]
          
          const kanan = [
              1, 0, 0, 0,
              0, 1, 0, 0,
              0, 0, 1, 0,
              0, change, 0, 1,
          ]
  
      gl.uniformMatrix4fv(uChanged, false, kiri);
      gl.drawArrays(gl.TRIANGLE_FAN, 0, 44);
      gl.drawArrays(gl.TRIANGLE_FAN, 45, 13);  
      gl.drawArrays(gl.TRIANGLE_FAN, 58, 3);
    //   gl.drawArrays(gl.TRIANGLE_FAN, 47, 3);
    //   gl.drawArrays(gl.TRIANGLE_FAN, 50, 3);
    //   gl.drawArrays(gl.TRIANGLE_FAN, 53, 3);
    
    //60
      gl.uniformMatrix4fv(uChanged, false, kanan);
      gl.drawArrays(gl.TRIANGLE_FAN, 76, 57);
      gl.drawArrays(gl.TRIANGLE_FAN, 134, 13);
      gl.drawArrays(gl.TRIANGLE_FAN, 147, 4);
      gl.drawArrays(gl.TRIANGLE_FAN, 61, 8);
      gl.drawArrays(gl.TRIANGLE_FAN, 151, 16);
  
    }
    setInterval(render, 1000 / 60);
  }
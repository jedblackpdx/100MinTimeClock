import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

let keyNum = 0
const HourMin = []

function HourIn() {
  const [hIn, setHour] = React.useState('');

  const handleChangeHr = (event) => {
    setHour(event.target.value);
    HourMin[0] = event.target.value;

    };

  return (
    <>
      <FormControl sx={{ margin: '0', minWidth: 60 }}>
        <InputLabel id="hr-title">Hr</InputLabel>
        <Select
          labelId="hr-dropdown"
          id="hr-dropdown"
          value={hIn}
          onChange={handleChangeHr}
          autoWidth
          label="Hr"
        >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          <MenuItem value={1}>01</MenuItem>
          <MenuItem value={2}>02</MenuItem>
          <MenuItem value={3}>03</MenuItem>
          <MenuItem value={4}>04</MenuItem>
          <MenuItem value={5}>05</MenuItem>
          <MenuItem value={6}>06</MenuItem>
          <MenuItem value={7}>07</MenuItem>
          <MenuItem value={8}>08</MenuItem>
          <MenuItem value={9}>09</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={13}>13</MenuItem>
          <MenuItem value={14}>14</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={17}>17</MenuItem>
          <MenuItem value={18}>18</MenuItem>
          <MenuItem value={19}>19</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={21}>21</MenuItem>
          <MenuItem value={22}>22</MenuItem>
          <MenuItem value={23}>23</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

function MinIn() {
  const [mIn, setMin] = React.useState('');

  const handleChangeMin = (event) => {

    setMin(event.target.value);
    HourMin[1]=event.target.value;
  };

  return (
    <>
      <FormControl sx={{ m: '0', minWidth: 60 }}>
        <InputLabel id="min-title">Min</InputLabel>
        <Select
          labelId="min-dropdown"
          id="min-dropdown"
          value={mIn}
          onChange={handleChangeMin}
          autoWidth
          label="Min"
        >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          <MenuItem value={0}>00</MenuItem>
          <MenuItem value={1}>01</MenuItem>
          <MenuItem value={2}>02</MenuItem>
          <MenuItem value={3}>03</MenuItem>
          <MenuItem value={4}>04</MenuItem>
          <MenuItem value={5}>05</MenuItem>
          <MenuItem value={6}>06</MenuItem>
          <MenuItem value={7}>07</MenuItem>
          <MenuItem value={8}>08</MenuItem>
          <MenuItem value={9}>09</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={13}>13</MenuItem>
          <MenuItem value={14}>14</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={17}>17</MenuItem>
          <MenuItem value={18}>18</MenuItem>
          <MenuItem value={19}>19</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={21}>21</MenuItem>
          <MenuItem value={22}>22</MenuItem>
          <MenuItem value={23}>23</MenuItem>
          <MenuItem value={24}>24</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={26}>26</MenuItem>
          <MenuItem value={27}>27</MenuItem>
          <MenuItem value={28}>28</MenuItem>
          <MenuItem value={29}>29</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={31}>31</MenuItem>
          <MenuItem value={32}>32</MenuItem>
          <MenuItem value={33}>33</MenuItem>
          <MenuItem value={34}>34</MenuItem>
          <MenuItem value={35}>35</MenuItem>
          <MenuItem value={36}>36</MenuItem>
          <MenuItem value={37}>37</MenuItem>
          <MenuItem value={38}>38</MenuItem>
          <MenuItem value={39}>39</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={41}>41</MenuItem>
          <MenuItem value={42}>42</MenuItem>
          <MenuItem value={43}>43</MenuItem>
          <MenuItem value={44}>44</MenuItem>
          <MenuItem value={45}>45</MenuItem>
          <MenuItem value={46}>46</MenuItem>
          <MenuItem value={47}>47</MenuItem>
          <MenuItem value={48}>48</MenuItem>
          <MenuItem value={49}>49</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={51}>51</MenuItem>
          <MenuItem value={52}>52</MenuItem>
          <MenuItem value={53}>53</MenuItem>
          <MenuItem value={54}>54</MenuItem>
          <MenuItem value={55}>55</MenuItem>
          <MenuItem value={56}>56</MenuItem>
          <MenuItem value={57}>57</MenuItem>
          <MenuItem value={58}>58</MenuItem>
          <MenuItem value={59}>59</MenuItem>
          <MenuItem value={60}>60</MenuItem>
          <MenuItem value={61}>61</MenuItem>
          <MenuItem value={62}>62</MenuItem>
          <MenuItem value={63}>63</MenuItem>
          <MenuItem value={64}>64</MenuItem>
          <MenuItem value={65}>65</MenuItem>
          <MenuItem value={66}>66</MenuItem>
          <MenuItem value={67}>67</MenuItem>
          <MenuItem value={68}>68</MenuItem>
          <MenuItem value={69}>69</MenuItem>
          <MenuItem value={70}>70</MenuItem>
          <MenuItem value={71}>71</MenuItem>
          <MenuItem value={72}>72</MenuItem>
          <MenuItem value={73}>73</MenuItem>
          <MenuItem value={74}>74</MenuItem>
          <MenuItem value={75}>75</MenuItem>
          <MenuItem value={76}>76</MenuItem>
          <MenuItem value={77}>77</MenuItem>
          <MenuItem value={78}>78</MenuItem>
          <MenuItem value={79}>79</MenuItem>
          <MenuItem value={80}>80</MenuItem>
          <MenuItem value={81}>81</MenuItem>
          <MenuItem value={82}>82</MenuItem>
          <MenuItem value={83}>83</MenuItem>
          <MenuItem value={84}>84</MenuItem>
          <MenuItem value={85}>85</MenuItem>
          <MenuItem value={86}>86</MenuItem>
          <MenuItem value={87}>87</MenuItem>
          <MenuItem value={88}>88</MenuItem>
          <MenuItem value={89}>89</MenuItem>
          <MenuItem value={90}>90</MenuItem>
          <MenuItem value={91}>91</MenuItem>
          <MenuItem value={92}>92</MenuItem>
          <MenuItem value={93}>93</MenuItem>
          <MenuItem value={94}>94</MenuItem>
          <MenuItem value={95}>95</MenuItem>
          <MenuItem value={96}>96</MenuItem>
          <MenuItem value={97}>97</MenuItem>
          <MenuItem value={98}>98</MenuItem>
          <MenuItem value={99}>99</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export { HourIn, MinIn, HourMin }

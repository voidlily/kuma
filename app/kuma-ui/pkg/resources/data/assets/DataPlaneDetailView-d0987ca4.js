import{u as Ce}from"./vue-router-d8e03a07.js";import{u as F}from"./store-15db9444.js";import{k as K}from"./kumaApi-41fb4c57.js";import{m as Pe,z as fe,e as ke,$ as Ee,T as Oe}from"./kongponents.es-c2485d1e.js";import{v as Ue,w as Qe,x as _e,p as le,K as Me,l as Ge,q as Ie,t as ze,o as Re,y as Le}from"./production-58f5acfb.js";import{t as ie}from"./toYaml-4e00099e.js";import{A as J,a as W}from"./AccordionItem-87f67967.js";import{_ as ve}from"./CodeBlock.vue_vue_type_style_index_0_lang-58ff7286.js";import{d as L,c as I,o as e,h as t,u as g,a as B,f as a,N as Se,t as y,i as ae,w as n,m as O,g as i,e as d,F as m,b as z,p as se,j as ne,a4 as xe,r as _,s as te}from"./runtime-dom.esm-bundler-32659b48.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{T as j}from"./TagList-fc86b2ea.js";import{_ as Te}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-76f6a5d9.js";import{E as De}from"./ErrorBlock-1ecc67e5.js";import{_ as be}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-c9a3fc78.js";import{_ as Ye,E as ee}from"./EnvoyData-c9399705.js";import{_ as Ae}from"./LabelList.vue_vue_type_style_index_0_lang-b9446735.js";import{S as Ne}from"./StatusBadge-940bb1dd.js";import{T as He}from"./TabsWidget-f7773bbb.js";import{_ as qe}from"./YamlView.vue_vue_type_script_setup_true_lang-33fcd065.js";import{_ as Ke,S as je}from"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-b16bfd1a.js";import{_ as Fe}from"./WarningsWidget.vue_vue_type_script_setup_true_lang-b814ea7a.js";import{u as Je}from"./index-ad2ab4aa.js";import"./datadogLogEvents-302eea7b.js";import"./QueryParameter-70743f73.js";const ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAVFBMVEXa2tra2tra2tra2tra2tra2tr////a2toAfd6izPLvzPnRfvDYteSKr86zas0Aar4AhODY6vr3+Prx8v2Kv+9aqOk3muUOj+N5t+211vXhqfW01fXvn55GAAAABnRSTlMC9s/Hbhsvz/I3AAABVklEQVRo3u3b3Y6CMBCG4SJYhnV/KD+K7v3f57bN7AFJTcDUmZB+74lH5EmMA5hmjK+pq1awqm5M6HxqxTudPSzssmxM06rUmDp8DFawIYi1qYRdlisTeCtcMAGnAgwYMGDAgJ8GGPDB4B8frepnl9cZH5d1374E7GmX1WVuA0xzTvixA+5zwpc0/OXrVgU5N/yx6tMHGDBgwIABvxmeiBZhmF3fPMjDFLuOSjDdnBJMvVOAb1G+y8PjlUKdOGyHOcpLJniiDfEVC/FYZYA3unxFx2OVAd7sTjZ073msRGB2Yy7KvcsC2z05Hitx2P6PVTEwf9W/h/5xvTBOB76ByN8ydzRRzofELln1schjVNCrTxyjsl5vtV7ol7L+tAEGDLhMWOAw5ADHPxIHXmpHfAWepgJOBBgwYMCAAT8NMGDAgJOw2hKO2tqR2qKV1mqZ3jKd2vrgH/W3idgykdWgAAAAAElFTkSuQmCC",We="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAAD4/042AAAH90lEQVRoBdVaC4xU1Rn+zr2zu8PyEBGoKMFVK0KLFXyiVKS2FFGIhhT7Smq1aQXbuMQHCwRQiBWVUl7CaiuxGoGosSQ0tJuU4qNrpQEfq0AReQisLKK7iCIsO3fO3+8/wx1mdgdmlp3srCdhz8y9597zff/7P4wBhxw50jfW2Pi4ERkhQB+91lGHAerEmFeLotHJprS01ij4oLGxRkR6dFTQmXAZYxoi0eilpqmhYQVEfpppUYe/ZsxKE6uv39fRzeZkglRzMk319cT/9R1eVuixAPazzyFBPG2p/fgA7M6PAd4v5MhKwB46DDnQAPvRPiCFhFiBNB5LXC8giawETPeuQHER0BRDnCRCTfjn9oLpVAJRDSm5ApHITiDiwy87J0lCwToSngfvvD4FJ5GVgLPvXEl8/mW7u0ProhB9QM1IzUnNyqNmDMkhbmEJ3uvWGSiKtCuJrBqQo3TUTw8C1gLNNCF79yfA+jSns85od/C6eVYC9uAXEBKwu+vSSDgHpuQLPbKakMRikI/qXLRR0Oq4oAO3GBpin6uC/Oc94H+7IWd0gbmoL3Db92GGXdJieb4uZCXgNjoeKjVkZiIhH9bCTF4KbK+FML+71M4ZnnHfzcir4M24E+jSKV+4k+/JjYAub06iHzVB22chCNw6FbKdWbmYDjzvdzBXfQs41gS89g7s4pcgX34FXPJN+IvvyzuJDLaQJJf+gdHFRR3OzrHDkGko6vn3AL27JzL1C2vpzIxM6tTjRsCsmAXDpIfNOxCUzwO+Opr+3jZ+y10D4UaqCQ2ZmqFTQ+YuJrhfzYHUHwKuGQRv4SSgpDjx1H6WIhMfha37DBh0ISIL7wU658ecWk8gJJJpVhK/fvQEifnlSRLySYKE7K8Hvn0BIgvyQyJ3E8oEuPm181ly/HkK0Ks75L+bIXOXJ1eYb/SAVzkFpk8vyJZdCO6dnxdzyi8BwjUkYZ6qcKHW/q0aONKYTmLpZJhzejLUksR9C9pMIu8EFK3pSYeO0v41QtFnUodqwn9iMnD2WRCSiD2wsE0k8k+AEreTaB4sQTCkP8CE1nyEJFQTsmUngj+eMLXma7N9zzsB2bQT+k+TGC5kJj7JML15CDLsUqqLitpVm1ilRWIry5O8E9Ak5s25m0mOWfjldbCVf81IIb6mGvblf5GAgTd2OOyGzTj2s6k4Nv5+2I1bMj6T6WJ+w2jKDvLKW4hPr3QFoLl9DPwJ41Lu8uPRRgQVi2CZ4FzU+oLZOqC/aPnBjF784ER4lzOjZxn+jIqKh7Ksye02VS/Tn3JZ2GinptHognMhr70N1HzILi6Ad8VA2GdWszxvgDfgfHgjLke8Zhuwh2W5WPjjWPhdXEbn3ol49Tvw+p/HiMUsfoqRHw1oQzNlKVTq6NkN/qrHAVauOuTVtxDMJDECNN+5iP6xA0Ip+9PugD9yqNNEfMmLQN/e8H9yI9cJmiY+DKu9RrdSRJfNBkpPnrXbTiAVPDf0lzwADCxz4MM/qoXgwSdpTjzJIHgtnxyJqXfC/8HV4TI3B4tWIKiqhkSLUDLzbniDL0673/xL25xYzYaSx7qNQNdO6eApSflgt9vPXH8Z/NkTYPr3Q2TWBHijrnHX44tXpuEJFi134DWH5AJeHz59Agq+YgmE4EUlzwyblDzBxx/5C+J3zYGtfteB9IZfhsjTM2A6RxF/hYR189HfdbP+CRYuR7zqDSbAIhTPJMkskg8fPD0C7L5kaiWsgu/aErwleGGY1LLadCkN93Jz8PzfXbTxaP+RCT9KXCN4ZzYlCp7RZ/CAtGdO9aX1BJoCyLQnIW+8D9ODDluZInnupOAtwUtpCfy55TCDmY1ThjegzHVs8Q2bYLfvTUj+H9UwNBsXOlsBXl/bOidubII8tAzy9lZIpyi8ub91dh3ik4efQXzNvxk1ovDnTWoB3q1jOI3N/hPsmzU85WAHx+gkKvlZ6rC5Sz7cM3cNaI0zaxmwdTcsy2VvwT1p4O3vFTzNhiHP/0NLyYcbKuiimb+Bdy3LCB7VtAW8vjM3DRxmG/jYctYs7HspXUy/Habf2UlM9rHnICydNYP68wh+yKlDn3tQNTH3Wfijh52W5MPNsxPQ0+n5LwD72A4yguD+n7PHZT1/fMSfeBGympJng+8/MjE38OHDeZhphKcY2rgvWQUcYp3CGt+UjwdYz4fDPr0aWMuQyP7Wn0at5CL58OE8zScnoM35sjX8H0x2VDxhMHfd4oqucF/7fBXA0kFYMvjlP4a5MnvhFT6bzzkzgQMHISvXwrCb8s7sytOGMQDncMhL64DX33Xp3v/lGJihg8Jb7T63JFBXD1n1OsMb20F2U/KLH7Ko6pIE5py1miGQp9Nm/CiY6wYn7xXiQxoBqf0U3j83uCNzq6dst91A8DwyD0fVesibmxJHJTdeDe/6IeGdgs1JAnqAa9ZvgejJG4/RzbjhaYdPWvNg41ZKPgLzvSEwN1xRMNCpGzsCsmMf8N52l1S01jVjr03E++MrRU2mZgeMauXKgTAj00vg1Be292cPH+xtMDxV1ipR7d7cel0aeKynyWza5Qoz4bGgGdVxwLOtqPPMtj2eZldhkWbGDqN9F50QIk1Gtu11ZoMytok3Jer4EwsK+0l/9OFFxNxhDh+NmdFD0w9rtY+lX+gBrvQ+E2YMyXWgoT/2cL9YUUzNf24j79Pe93zizmiEJYK5mT7RQYaaTerPbf4PGwFZsK8ONooAAAAASUVORK5CYII=",re="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAAD4/042AAAEj0lEQVRoBe1aS28TVxT+7ngydhwnPGISTBKHEB6iUtOWHTvWqCtKqQhISC2vBbCpRDf9BUgsgAWbdlGppWqlSl1UXfMLCmXRqgXUxmCclOCWxI4Tv4Zz7s00BntmLh4rTCSfxJ4755458333fHfuTTQCZFOHTo+ijCs2cAi2nWJfaE2InABuw8Lle7e/eCwYvL2CXwF7a2hBtwQm8iKKdwwe+Y0HnhnRgBN2Q8qmJcPwOxm7EXrNe40jzVfDq38j9HUJvOkqdSvQrUDAEeiIhGaPH8bsyfe1oWQuTuPxhePa8V6BplenTl85tQ2l9A7YMUsnHMsTIyjtm9CK1QkKXIHC3nEI2l3RgqhzPzw/sB/g+A5ZYAKlPTsVFMnCH1Xx3f26XP2TUUQgAuXhJKr9fQqQRgVYPpUtA7IANvQq5sciEIHi7jHKb5OE9DQh5SOvoGs6pKNABJYn06tAaDQ1SLB82DoFnnO1TaA8NIhqIo7IQkFLDI58zPx/WvEMTsfaJlAiPbPF789oiWHxPTX6A3f/kPGdmQEBKlCaGJUE+oiANJ9JvEAEeOL23/ldHvVmjUrt9d1WBSrJLaiRfMzCEqzcU8pPcDzmAMunSk8f699FxP7KqngvVK/R19ZKvDy+Qy5cvQ8z8la2xuhzII8+m9foF9+axOz0YRm3/dbP6PvtoWy7fZm1iIV6tAd1i4+W3BLUrR7Y1Jb+1T7eKqg41ccajj94JPPy4DskaoleZM8cRYmeUGyO1hm0Q6DRz5XMnj2KpV1jTcSYyOTnNzjc1Uw1eCwBpQIFhNWqfvhKCZDPZbCQoGK5eVhz82uJKYjBPDp/DFwhBswZnEcmT3YlnzV/jRbBzKVplFNDTeDXEnu3TLNeBpb44x3o20vksh8fQYU2d1GaF+nr3yBCc6SVOaQyl05gxYm/9rWMf1VCra5v9LU1BxoT/N+mCpSHB2HNzmP05neu4J14ltZKKqnIroLnPta8n2ycHHzsHAGqgPXPM4x8+QOBLzXeo6ntSMsiGaYbwDcFajg6QiA6k0M9EQM/NSJFb/CMqe/PDD0QTKrU976V8uMg3j74ifOg8IsNZX9bC1mYmHQJvOlqBJ7EcUPgw8EELFq5vn1WQKHmPaX6IwIXhzdJ3jfmnmPRJ95vgAJJqJfAf0Tgx3pMpGn7cW5oExIE0M0Y/GepzdgT65EfbrPvVZuKW7g6vlV+uO1lYurgWTtmGHIEo7QYxYhSlM6jlJf9UT6nNvtiBFj5+SjUNeRbrNWpLTBmRSiOc6h8bjfOlquya8TyEQDdN1+t4dOZvFsqXsjU3ob/rqVfMv5iGaijbdORO2ihUlshiqdu5RZ4Uqnix3wRBsWcSiawj/8/xAEqGSd8ye4vV8DS4e3EheEBWYmXAl7zJJTrAMvm1LaEpPLV0wLu8V7NxUJJwAVrS3egSdwy4zo7uwTWecCbbtetQNOQrLPDoOd1bp3v2bnbEXZaN+nFiQ1qjJ3WfFymZdN9rQ4tOcJM2CNzf/+ysH33gVuiLlIkpyTh7Q8tZgbGr9sI8RO9qfIBv27zAiEVYZQrGIvuAAAAAElFTkSuQmCC",ue="data:image/png;base64,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",pe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB5CAYAAADyOOV3AAAFOklEQVR4Ae2dP2tUQRTFp7S385MofgRFiGBhKr9GuqBiI9iktwosCAnRLo0g8Q+ojSaNBomumESTIAqSLiPTTc4k7+bmztudu3sCAztv7p137/nNebtuREMIIXz9eXBluLO/NNzZe8sxCRrsL23tHlxObMP33b3ZzeHO0edv25FjcjRITBPbsPXj12+CnRywOcvENtC9kwk3gU5sQ048vf7775DDsQbIswAc+eNaAQJ2jU8unoBljVxHELBrfHLxBCxr5DqCgF3jk4snYFkj1xEE7BqfXDwByxq5jiBg1/jk4glY1sh1BAG7xicXT8CyRq4jCNg1Prl4ApY1ch1BwK7xycUTsKyR6wgCdo1PLp6AZY1cRxCwa3xy8QQsa+Q6goBd45OLJ2BZI9cRBOwan1w8AcsauY4gYNf45OIJWNbIdQQBu8YnF0/AskauIwjYNT65eAKWNXIdUQD+c2sm5iPemY2mIcnD/bsVMuqTs0yvQ7wQYtXRXb79XtxfpSEB4wH3foCgHwIGQSS+5qeddAOsxzgPOwsLMR9xsBhNQ2qA+3crZNQnZ5le89/o6Jbb3WrxKRovuOuIBR9TAHnSwcfk8T8hYP8MOzsg4E55/C8SsH+GnR0QcKc8/hcJ2D/Dzg4IuFMe/4sE7J9hZwcE3CmP/8WpAzz7cCnm48bdQaw58r3T63H/TB3gcG0+jnIQ8IgVGCXcdK9x/9DBPTuagEesADr43uBFrDlwf217+B5unV+fX4z5mPjfJiGA95vbsebA/bWAMb/6HJ/Z2gJbj0fBasJNe+H+Wj0wv/qcgG2ORiAErFXAGI8AWnfwo5U30TLmHq/GfPA92PiejAdIex4x33oAl9c+xnwQMAFrz2Rb8bUdgg7D/bXdYz7ur53n7k2v6WA6WHsm24qv7RB0FO6v7R7zcX/tnA42OhYFR0AErFXAGI8AEJB1jvtry8V8az2Fg/PvLdNr63ehmK9tuHZ8bQERAO6vrR/zcX/tvACMN6g91zZcOx770QomxeP+2voxX7qftE7A0/YejCeo9lx7omvHYz+SA7TruL+2fszX3h/jCwfn31um15bvQVMuFqxtGN/DrXOsBwWxznF/bb+Yb62nAIwXrDfAgq0N437WubU/zMd6rP3i/to58gx4QbshxtduGPezzrFe6xzrIWBBARSs9twKFPOxPqG9YhnzcX/tHA3bvIOtnwkwXyuYFI+ACoLCBcyX7ietuwMsNTTudQQk8CyWMd/aDwFP25+Dkbj1BOGJLI6scAHzrfX0nY/1Cu0Vy5hvrRd5Nv8ebG2473wEVBAULmC+tV4C5iO6rb9Gaj3RfeejAwXDFsuYb62XDqaD6WCNi9CBhUWFC5ivufdJsXQwHUwHn+SM066hAwXDFsuYf9p9znqdDqaD6zpY+/vc2if6rCf/vHFY77j7HbmDUQDt/LzCjypP248Ub62bgHt+REsApXUCrgzIKqgETLturad3B+PvX61za8N951v7w3xrvb0DthbIfNuHXAJu7BFf+0ATMAHbHhG1TyT30/Ggg+lg3Ymhw9rSiw6mg9s6kXxC6HjQwXSw7sTQYW3pRQfTwW2dSD4hdDzoYDpYd2LosLb0ooPp4LZOJJ8QOh50MB2sOzF0WFt60cF0cFsnkk8IHQ86mA7WnRg6rC296OBpd/Dqu0+Rw68GhYNXXq4f4UXOj//fQ171SGzD8tr60GsDrFs6iOvDcPP+k5mnrzYOKZYklq/1xDSxDWHmwcWr84NLz15v3H7+4csch38NEsvENLH9DwLs1co+Fv2iAAAAAElFTkSuQmCC",de=""+new URL("Retry-8b2ec896.png",import.meta.url).href,ye=""+new URL("Timeout-dcabf0f7.jpg",import.meta.url).href,he="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAAD4/042AAABYklEQVRoBe2av0oDQRDGZxbRxhfwDRI0NhKtRAhWPkM6Ex9KTOczWElArBRsAuEeIS+QRpvJfJdcqkWRLWYH5or7s7N797v59j4Odph2m4hw//xywsT3JHQqJMddrIajcq2Jaalcs2bx+cTMAi7Grn9xfSI/388kMsJ19RvznA+Pxs3X+yoh867gkV1NNJjBzr3BcKpT5rH6rOcAmR5SO+dzQQdtYE/4YB2w5hGVPdXmNnnSfCvYUz7kpzVewFor9woc/DeDb/OXX4fcjO728b/67jsWnLhXgHtnw/anqCAJpkPdKxAvYDp/9OHhQtYKhAtZKxAuZK1AuJC1AuFC1gqEC1krEC5krUC4kLUC4ULWCoQLWSsQLmStQLhQKFCYAaxSrgvvYTYc7AnL92YEpQ9WdqxSzkrvYzUe7Lwt8rh6dVMn0WVL6yWaxcdtQtUHCidIG7pY9cddsUfL3sF6LbfZAN5wf/+tIkpkAAAAAElFTkSuQmCC",me="data:image/png;base64,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",Xe="data:image/png;base64,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",ge="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAAD4/042AAAEs0lEQVRoBe1azWtUVxQ/781HkslHzQwpDfkQUUpdaHZtaUtTuhACYtC/wI22FHd+bMSlFNSdIhjcddFNKW0pZlfS0BayEdSFqAjRJMbGfBgTZ+JM8p7nd27ezMvkvsy7yUucAS+898479+P8zj3n3nvembGIy8xMttOhwiVy6RuX3HbwqrVYZE2SRUM2Jc5lMqlxaxX8Hdd109UKWofLsqxZVqLHxszXGngoBMzAbsNtdBrWBI+x29Xu8xtNJLDbGzWohbr3CrxrK8W3A4BtW9SYqqdEQg1fKCzT6+wSOY4bubjIFQD41g+ayLZL3hmrS1KSlZmbX4xciZKUiOYGMw/wfz/M0ldXnsgFGjzURV2sfRceF+3KhwPxCYdDQslhml+ImVq54KKlVwv6v7Pd9GFzXIA/f7Ui/T5qidE/Z3bT1MIyfXn5qfRBhb9/ptGmvv11dOLzFCVi0i3ULe560mVEBr/6lN4igW/+Nr5hRU+u8/TlfdlXqychr9QO8tQUTGcd+ul2TmT98EVK31nDtaamX1aWqukYxGpuaqB69nm4zfk/Xkizi0faqPfjFC29ydPCIoPUlH9H83T61gKlUzbdOt6qaaFnRa6AbhFDtOM4FRfxpzdmxNgj32X0aDXcyHchbJXYbTa1jTIa0502cgXUbLuBrqKZxCJrhffEgP2i2Kac2BYFyoWEfmc0pguyqhRwePusaQu4cW9bDW0z2hYLbDYWcmOmDkTRK6DbRsPGQuJC4SdfWm5bLDQ4sURdv07KBbpSLDT8f55c9oc0hxQmxciFCg7RtUdZ+v1ZnqbfOBIz+WMn0HePdhFCtpMjczSe4w6r9NixdprnffLA4CxzAlwlZlF/d530CXszUuDq4yzdfLqkgh+eKMDwLzuhA+ImAEIc5LCfl3YaNFajtNXZ1N+epFN7w8dBGNNIgd+m8gJgoKeFvs4k0H9daeZEDcrAZ61iBY/GcxfX3T8UPkxAn0rFKBb6ZHhW3OZBbzAI3SIGiDCxUCWwunojCzichPHZXzeefHFtOhbSjrgx00gBHDRhCgK6oLA5TH+TNkYKYAFWWzFSgOSory4VjBRQFgjnRjulptGxJ8FWiA9u7ET4tEy3NssFGrytlO9fLNLMynoXNlOAW1daB942iu/iGKdScIFWuaLNK/FnNk/fTr4kPP3FSIG2es7Gs9P99brgH2MN7eWFBl/lqOv+hFygK8VCawYJeIEFYAm/NYwOsh/ncnR9PldMo3hhgHpCqkWjB7uoPRkX4OMFlRfq5ETP2P4Omswv0557Y3IYKoywiAolpDe/+tNQHi1pm7KpznDcdDHdaBZKnNnVwPGMS78s5mlqhUMGBDUiX7mGCFKkwld+R/PVSwDzrQSf3ZPfMaQKRvCCrBEz+Mm/jaHLumJkgXW9NQwvLwS3OTmByJPjoo409bU0bJgX0gy1htX5RI0F5uFUUmYfVjDaRteMGPCCLDQSuQA81tJRbIVYCHVbKZ7bQAGvRK7AlvJCHirN0z/r/urIXcg/+E7QZWt7J0RGK+O9AtHOp/loHKHwfw9qtAC7zefDUI3i5wOOhmr/zx74ywr+9cE5nZ9rwZ2AEViBGdjfAhPs4mowdpbkAAAAAElFTkSuQmCC",Ve=""+new URL("VirtualOutbound-3bb05b70.png",import.meta.url).href,Ze={class:"policy-type-tag"},$e=["src"],et=L({__name:"PolicyTypeTag",props:{policyType:{type:String,required:!0}},setup(A){const o=A,P=F(),w={CircuitBreaker:{iconUrl:ce},FaultInjection:{iconUrl:We},HealthCheck:{iconUrl:re},MeshAccessLog:{iconUrl:he},MeshCircuitBreaker:{iconUrl:ce},MeshGateway:{iconUrl:null},MeshGatewayRoute:{iconUrl:null},MeshHealthCheck:{iconUrl:re},MeshProxyPatch:{iconUrl:ue},MeshRateLimit:{iconUrl:pe},MeshRetry:{iconUrl:de},MeshTimeout:{iconUrl:ye},MeshTrace:{iconUrl:ge},MeshTrafficPermission:{iconUrl:me},ProxyTemplate:{iconUrl:ue},RateLimit:{iconUrl:pe},Retry:{iconUrl:de},Timeout:{iconUrl:ye},TrafficLog:{iconUrl:he},TrafficPermission:{iconUrl:me},TrafficRoute:{iconUrl:Xe},TrafficTrace:{iconUrl:ge},VirtualOutbound:{iconUrl:Ve}},T=I(()=>{const f=P.state.policyTypes.map(r=>{const D=w[r.name]??{iconUrl:null};return[r.name,D]});return Object.fromEntries(f)}),h=I(()=>T.value[o.policyType]);return(f,r)=>(e(),t("span",Ze,[g(h).iconUrl!==null?(e(),t("img",{key:0,class:"policy-type-tag-icon",src:g(h).iconUrl,alt:""},null,8,$e)):(e(),B(g(Pe),{key:1,icon:"brain",size:"24"})),a(),Se(f.$slots,"default",{},()=>[a(y(o.policyType),1)],!0)]))}});const Be=S(et,[["__scopeId","data-v-610bc459"]]),tt={class:"policy-type-heading"},at={class:"policy-list"},st={key:0,class:"origin-list"},nt=L({__name:"PolicyTypeEntryList",props:{id:{type:String,required:!1,default:"entry-list"},policyTypeEntries:{type:Object,required:!0}},setup(A){const o=A,P=[{label:"From",key:"sourceTags"},{label:"To",key:"destinationTags"},{label:"On",key:"name"},{label:"Conf",key:"config"},{label:"Origin policies",key:"origins"}];function w({headerKey:T}){return{class:`cell-${T}`}}return(T,h)=>{const f=ae("router-link");return e(),B(W,{"initially-open":[],"multiple-open":""},{default:n(()=>[(e(!0),t(m,null,O(o.policyTypeEntries,(r,D)=>(e(),B(J,{key:D},{"accordion-header":n(()=>[i("h3",tt,[d(Be,{"policy-type":r.type},{default:n(()=>[a(y(r.type)+" ("+y(r.connections.length)+`)
          `,1)]),_:2},1032,["policy-type"])])]),"accordion-content":n(()=>[i("div",at,[d(g(fe),{class:"policy-type-table",fetcher:()=>({data:r.connections,total:r.connections.length}),headers:P,"cell-attrs":w,"disable-pagination":"","is-clickable":""},{sourceTags:n(({rowValue:s})=>[s.length>0?(e(),B(j,{key:0,class:"tag-list",tags:s},null,8,["tags"])):(e(),t(m,{key:1},[a(`
                —
              `)],64))]),destinationTags:n(({rowValue:s})=>[s.length>0?(e(),B(j,{key:0,class:"tag-list",tags:s},null,8,["tags"])):(e(),t(m,{key:1},[a(`
                —
              `)],64))]),name:n(({rowValue:s})=>[s!==null?(e(),t(m,{key:0},[a(y(s),1)],64)):(e(),t(m,{key:1},[a(`
                —
              `)],64))]),origins:n(({rowValue:s})=>[s.length>0?(e(),t("ul",st,[(e(!0),t(m,null,O(s,(v,G)=>(e(),t("li",{key:`${D}-${G}`},[d(f,{to:v.route},{default:n(()=>[a(y(v.name),1)]),_:2},1032,["to"])]))),128))])):(e(),t(m,{key:1},[a(`
                —
              `)],64))]),config:n(({rowValue:s,rowKey:v})=>[s!==null?(e(),B(ve,{key:0,id:`${o.id}-${D}-${v}-code-block`,code:s,language:"yaml","show-copy-button":!1},null,8,["id","code"])):(e(),t(m,{key:1},[a(`
                —
              `)],64))]),_:2},1032,["fetcher"])])]),_:2},1024))),128))]),_:1})}}});const ot=S(nt,[["__scopeId","data-v-dc099db6"]]),lt={class:"policy-type-heading"},it={class:"policy-list"},At={key:1,class:"tag-list-wrapper"},ct={key:0},rt={key:1},ut={key:0,class:"list"},pt={key:0,class:"list"},dt=L({__name:"RuleEntryList",props:{id:{type:String,required:!1,default:"entry-list"},ruleEntries:{type:Object,required:!0}},setup(A){const o=A,P=[{label:"Type",key:"type"},{label:"Addresses",key:"addresses"},{label:"Conf",key:"config"},{label:"Origin policies",key:"origins"}];function w({headerKey:T}){return{class:`cell-${T}`}}return(T,h)=>{const f=ae("router-link");return e(),B(W,{"initially-open":[],"multiple-open":""},{default:n(()=>[(e(!0),t(m,null,O(o.ruleEntries,(r,D)=>(e(),B(J,{key:D},{"accordion-header":n(()=>[i("h3",lt,[d(Be,{"policy-type":r.type},{default:n(()=>[a(y(r.type)+" ("+y(r.connections.length)+`)
          `,1)]),_:2},1032,["policy-type"])])]),"accordion-content":n(()=>[i("div",it,[d(g(fe),{class:"policy-type-table",fetcher:()=>({data:r.connections,total:r.connections.length}),headers:P,"cell-attrs":w,"disable-pagination":"","is-clickable":""},{type:n(({rowValue:s})=>[s.sourceTags.length===0&&s.destinationTags.length===0?(e(),t(m,{key:0},[a(`
                —
              `)],64)):(e(),t("div",At,[s.sourceTags.length>0?(e(),t("div",ct,[a(`
                  From

                  `),d(j,{class:"tag-list",tags:s.sourceTags},null,8,["tags"])])):z("",!0),a(),s.destinationTags.length>0?(e(),t("div",rt,[a(`
                  To

                  `),d(j,{class:"tag-list",tags:s.destinationTags},null,8,["tags"])])):z("",!0)]))]),addresses:n(({rowValue:s})=>[s.length>0?(e(),t("ul",ut,[(e(!0),t(m,null,O(s,(v,G)=>(e(),t("li",{key:`${D}-${G}`},y(v),1))),128))])):(e(),t(m,{key:1},[a(`
                —
              `)],64))]),origins:n(({rowValue:s})=>[s.length>0?(e(),t("ul",pt,[(e(!0),t(m,null,O(s,(v,G)=>(e(),t("li",{key:`${D}-${G}`},[d(f,{to:v.route},{default:n(()=>[a(y(v.name),1)]),_:2},1032,["to"])]))),128))])):(e(),t(m,{key:1},[a(`
                —
              `)],64))]),config:n(({rowValue:s,rowKey:v})=>[s!==null?(e(),B(ve,{key:0,id:`${o.id}-${D}-${v}-code-block`,code:s,language:"yaml","show-copy-button":!1},null,8,["id","code"])):(e(),t(m,{key:1},[a(`
                —
              `)],64))]),_:2},1032,["fetcher"])])]),_:2},1024))),128))]),_:1})}}});const yt=S(dt,[["__scopeId","data-v-da22b149"]]),we=A=>(se("data-v-ed201f38"),A=A(),ne(),A),ht=we(()=>i("h2",{class:"visually-hidden"},`
    Policies
  `,-1)),mt={key:0,class:"mt-2"},gt=we(()=>i("h2",null,"Rules",-1)),ft=L({__name:"SidecarDataplanePolicyList",props:{dppName:{type:String,required:!0},policyTypeEntries:{type:Object,required:!0},ruleEntries:{type:Array,required:!0}},setup(A){const o=A;return(P,w)=>(e(),t(m,null,[ht,a(),d(ot,{id:"policies","policy-type-entries":o.policyTypeEntries},null,8,["policy-type-entries"]),a(),A.ruleEntries.length>0?(e(),t("div",mt,[gt,a(),d(yt,{id:"rules","rule-entries":o.ruleEntries},null,8,["rule-entries"])])):z("",!0)],64))}});const vt=S(ft,[["__scopeId","data-v-ed201f38"]]),H=A=>(se("data-v-ee401b9a"),A=A(),ne(),A),Tt={class:"mesh-gateway-policy-list"},Dt=H(()=>i("h3",null,"Gateway policies",-1)),bt={key:0,class:"policy-list"},Bt=H(()=>i("h3",{class:"mt-6"},`
      Listeners
    `,-1)),wt=H(()=>i("b",null,"Host",-1)),Ct=H(()=>i("h4",{class:"mt-2"},`
              Routes
            `,-1)),Pt={class:"dataplane-policy-header"},kt=H(()=>i("b",null,"Route",-1)),Et=H(()=>i("b",null,"Service",-1)),Ot={key:0,class:"badge-list"},Ut={class:"policy-list mt-1"},Qt=L({__name:"MeshGatewayDataplanePolicyList",props:{meshGatewayDataplane:{type:Object,required:!0},meshGatewayListenerEntries:{type:Array,required:!0},meshGatewayRoutePolicies:{type:Array,required:!0}},setup(A){const o=A;return(P,w)=>{const T=ae("router-link");return e(),t("div",Tt,[Dt,a(),A.meshGatewayRoutePolicies.length>0?(e(),t("ul",bt,[(e(!0),t(m,null,O(A.meshGatewayRoutePolicies,(h,f)=>(e(),t("li",{key:f},[i("span",null,y(h.type),1),a(`:

        `),d(T,{to:h.route},{default:n(()=>[a(y(h.name),1)]),_:2},1032,["to"])]))),128))])):z("",!0),a(),Bt,a(),i("div",null,[(e(!0),t(m,null,O(o.meshGatewayListenerEntries,(h,f)=>(e(),t("div",{key:f},[i("div",null,[i("div",null,[wt,a(": "+y(h.hostName)+":"+y(h.port)+" ("+y(h.protocol)+`)
          `,1)]),a(),h.routeEntries.length>0?(e(),t(m,{key:0},[Ct,a(),d(W,{"initially-open":[],"multiple-open":""},{default:n(()=>[(e(!0),t(m,null,O(h.routeEntries,(r,D)=>(e(),B(J,{key:D},xe({"accordion-header":n(()=>[i("div",Pt,[i("div",null,[i("div",null,[kt,a(": "),d(T,{to:r.route},{default:n(()=>[a(y(r.routeName),1)]),_:2},1032,["to"])]),a(),i("div",null,[Et,a(": "+y(r.service),1)])]),a(),r.policies.length>0?(e(),t("div",Ot,[(e(!0),t(m,null,O(r.policies,(s,v)=>(e(),B(g(ke),{key:`${f}-${v}`},{default:n(()=>[a(y(s.type),1)]),_:2},1024))),128))])):z("",!0)])]),_:2},[r.policies.length>0?{name:"accordion-content",fn:n(()=>[i("ul",Ut,[(e(!0),t(m,null,O(r.policies,(s,v)=>(e(),t("li",{key:`${f}-${v}`},[a(y(s.type)+`:

                      `,1),d(T,{to:s.route},{default:n(()=>[a(y(s.name),1)]),_:2},1032,["to"])]))),128))])]),key:"0"}:void 0]),1024))),128))]),_:2},1024)],64)):z("",!0)])]))),128))])])}}});const _t=S(Qt,[["__scopeId","data-v-ee401b9a"]]),Mt={key:2,class:"policies-list"},Gt={key:3,class:"policies-list"},It=L({__name:"DataplanePolicies",props:{dataPlane:{type:Object,required:!0}},setup(A){const o=A,P=F(),w=_(null),T=_([]),h=_([]),f=_([]),r=_([]),D=_(!0),s=_(null);te(()=>o.dataPlane.name,function(){v()}),v();async function v(){var l,c;s.value=null,D.value=!0,T.value=[],h.value=[],f.value=[],r.value=[];try{if(((c=(l=o.dataPlane.networking.gateway)==null?void 0:l.type)==null?void 0:c.toUpperCase())==="BUILTIN")w.value=await K.getMeshGatewayDataplane({mesh:o.dataPlane.mesh,name:o.dataPlane.name}),f.value=G(w.value),r.value=q(w.value.policies);else{const{items:u}=await K.getSidecarDataplanePolicies({mesh:o.dataPlane.mesh,name:o.dataPlane.name});T.value=V(u??[]);const{items:b}=await K.getDataplaneRules({mesh:o.dataPlane.mesh,name:o.dataPlane.name});h.value=U(b??[])}}catch(p){p instanceof Error?s.value=p:console.error(p)}finally{D.value=!1}}function G(l){const c=[];for(const p of l.listeners)for(const u of p.hosts)for(const b of u.routes){const E=[];for(const Q of b.destinations){const M=q(Q.policies),C={routeName:b.route,route:{name:"policy",params:{mesh:l.gateway.mesh,policyPath:"meshgatewayroutes"},query:{ns:b.route}},service:Q.tags["kuma.io/service"],policies:M};E.push(C)}c.push({protocol:p.protocol,port:p.port,hostName:u.hostName,routeEntries:E})}return c}function q(l){if(l===void 0)return[];const c=[];for(const p of Object.values(l)){const u=P.state.policyTypesByName[p.type];c.push({type:p.type,name:p.name,route:{name:"policy",params:{mesh:p.mesh,policyPath:u.path},query:{ns:p.name}}})}return c}function V(l){const c=new Map;for(const u of l){const{type:b,service:E}=u,Q=typeof E=="string"&&E!==""?[{label:"kuma.io/service",value:E}]:[],M=b==="inbound"||b==="outbound"?u.name:null;for(const[C,x]of Object.entries(u.matchedPolicies)){c.has(C)||c.set(C,{type:C,connections:[]});const Y=c.get(C),N=P.state.policyTypesByName[C];for(const oe of x){const R=Z(oe,N,u,Q,M);Y.connections.push(...R)}}}const p=Array.from(c.values());return p.sort((u,b)=>u.type.localeCompare(b.type)),p}function Z(l,c,p,u,b){const E=l.conf&&Object.keys(l.conf).length>0?ie(l.conf):null,M=[{name:l.name,route:{name:"policy",query:{ns:l.name},params:{mesh:l.mesh,policyPath:c.path}}}],C=[];if(p.type==="inbound"&&Array.isArray(l.sources))for(const{match:x}of l.sources){const N={sourceTags:[{label:"kuma.io/service",value:x["kuma.io/service"]}],destinationTags:u,name:b,config:E,origins:M};C.push(N)}else{const Y={sourceTags:[],destinationTags:u,name:b,config:E,origins:M};C.push(Y)}return C}function U(l){const c=new Map;for(const u of l){c.has(u.policyType)||c.set(u.policyType,{type:u.policyType,connections:[]});const b=c.get(u.policyType),E=P.state.policyTypesByName[u.policyType],Q=k(u,E);b.connections.push(...Q)}const p=Array.from(c.values());return p.sort((u,b)=>u.type.localeCompare(b.type)),p}function k(l,c){const{type:p,service:u,subset:b,conf:E}=l,Q=b?Object.entries(b):[];let M,C;p==="ClientSubset"?Q.length>0?M=Q.map(([R,$])=>({label:R,value:$})):M=[{label:"kuma.io/service",value:"*"}]:M=[],p==="DestinationSubset"?Q.length>0?C=Q.map(([R,$])=>({label:R,value:$})):typeof u=="string"&&u!==""?C=[{label:"kuma.io/service",value:u}]:C=[{label:"kuma.io/service",value:"*"}]:p==="ClientSubset"&&typeof u=="string"&&u!==""?C=[{label:"kuma.io/service",value:u}]:C=[];const x=l.addresses??[],Y=E&&Object.keys(E).length>0?ie(E):null,N=[];for(const R of l.origins)N.push({name:R.name,route:{name:"policy",query:{ns:R.name},params:{mesh:R.mesh,policyPath:c.path}}});return[{type:{sourceTags:M,destinationTags:C},addresses:x,config:Y,origins:N}]}return(l,c)=>D.value?(e(),B(be,{key:0})):s.value!==null?(e(),B(De,{key:1,error:s.value},null,8,["error"])):T.value.length>0?(e(),t("div",Mt,[d(vt,{"dpp-name":A.dataPlane.name,"policy-type-entries":T.value,"rule-entries":h.value},null,8,["dpp-name","policy-type-entries","rule-entries"])])):f.value.length>0&&w.value!==null?(e(),t("div",Gt,[d(_t,{"mesh-gateway-dataplane":w.value,"mesh-gateway-listener-entries":f.value,"mesh-gateway-route-policies":r.value},null,8,["mesh-gateway-dataplane","mesh-gateway-listener-entries","mesh-gateway-route-policies"])])):(e(),B(Te,{key:4}))}});const zt=S(It,[["__scopeId","data-v-132baaf2"]]),X=A=>(se("data-v-681859bd"),A=A(),ne(),A),Rt={class:"entity-heading"},Lt={key:0},St=X(()=>i("h4",null,"Status",-1)),xt={key:1},Yt=X(()=>i("h4",null,"Reason",-1)),Nt={key:0},Ht=X(()=>i("h4",null,"Tags",-1)),qt={key:1},Kt=X(()=>i("h4",null,"Versions",-1)),jt={class:"config-wrapper"},Ft={key:0},Jt=["href"],Wt=L({__name:"DataPlaneDetails",props:{dataPlane:{type:Object,required:!0},dataPlaneOverview:{type:Object,required:!0}},setup(A){const o=A,P=Je(),w=F(),T=[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"DPP Insights"},{hash:"#dpp-policies",title:"Policies"},{hash:"#xds-configuration",title:"XDS Configuration"},{hash:"#envoy-stats",title:"Stats"},{hash:"#envoy-clusters",title:"Clusters"},{hash:"#mtls",title:"Certificate Insights"},{hash:"#warnings",title:"Warnings"}],h=_([]),f=I(()=>{const{type:U,name:k,mesh:l}=o.dataPlane;return{type:U,name:k,mesh:l}}),r=I(()=>Ie(o.dataPlane,o.dataPlaneOverview.dataplaneInsight)),D=I(()=>le(o.dataPlane)),s=I(()=>ze(o.dataPlaneOverview.dataplaneInsight)),v=I(()=>Re(o.dataPlane)),G=I(()=>Le(o.dataPlaneOverview)),q=I(()=>{var k;const U=Array.from(((k=o.dataPlaneOverview.dataplaneInsight)==null?void 0:k.subscriptions)??[]);return U.reverse(),U}),V=I(()=>h.value.length===0?T.filter(U=>U.hash!=="#warnings"):T);function Z(){var c;const U=((c=o.dataPlaneOverview.dataplaneInsight)==null?void 0:c.subscriptions)??[];if(U.length===0||!("version"in U[0]))return;const k=U[0].version;if(k&&k.kumaDp&&k.envoy){const p=Ue(k);p.kind!==Qe&&p.kind!==_e&&h.value.push(p)}w.getters["config/getMulticlusterStatus"]&&k&&le(o.dataPlane).find(b=>b.label===Me)&&typeof k.kumaDp.kumaCpCompatible=="boolean"&&!k.kumaDp.kumaCpCompatible&&h.value.push({kind:Ge,payload:{kumaDp:k.kumaDp.version}})}return Z(),(U,k)=>(e(),B(He,{tabs:g(V)},{tabHeader:n(()=>[i("h1",Rt,`
        DPP: `+y(A.dataPlane.name),1)]),overview:n(()=>[d(Ae,null,{default:n(()=>[i("div",null,[i("ul",null,[(e(!0),t(m,null,O(g(f),(l,c)=>(e(),t("li",{key:c},[i("h4",null,y(c),1),a(),i("div",null,y(l),1)]))),128)),a(),g(r).status?(e(),t("li",Lt,[St,a(),i("div",null,[d(Ne,{status:g(r).status},null,8,["status"])])])):z("",!0),a(),g(r).reason.length>0?(e(),t("li",xt,[Yt,a(),i("div",null,[(e(!0),t(m,null,O(g(r).reason,(l,c)=>(e(),t("div",{key:c,class:"reason"},y(l),1))),128))])])):z("",!0)])]),a(),i("div",null,[i("ul",null,[g(D).length>0?(e(),t("li",Nt,[Ht,a(),d(j,{tags:g(D)},null,8,["tags"])])):z("",!0),a(),g(s)?(e(),t("li",qt,[Kt,a(),i("p",null,[(e(!0),t(m,null,O(g(s),(l,c)=>(e(),t("span",{key:c,class:"tag-cols"},[i("span",null,y(c)+`:
                  `,1),a(),i("span",null,y(l),1)]))),128))])])):z("",!0)])])]),_:1}),a(),i("div",jt,[d(qe,{id:"code-block-data-plane",content:g(v),"is-searchable":""},null,8,["content"])])]),insights:n(()=>[d(Ye,{"is-empty":g(q).length===0},{default:n(()=>[d(g(Ee),{"border-variant":"noBorder"},{body:n(()=>[d(W,{"initially-open":0},{default:n(()=>[(e(!0),t(m,null,O(g(q),(l,c)=>(e(),B(J,{key:c},{"accordion-header":n(()=>[d(Ke,{details:l},null,8,["details"])]),"accordion-content":n(()=>[d(je,{details:l,"is-discovery-subscription":""},null,8,["details"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1},8,["is-empty"])]),"dpp-policies":n(()=>[d(zt,{"data-plane":A.dataPlane},null,8,["data-plane"])]),"xds-configuration":n(()=>[d(ee,{"data-path":"xds",mesh:A.dataPlane.mesh,"dpp-name":A.dataPlane.name,"query-key":"envoy-data-data-plane"},null,8,["mesh","dpp-name"])]),"envoy-stats":n(()=>[d(ee,{"data-path":"stats",mesh:A.dataPlane.mesh,"dpp-name":A.dataPlane.name,"query-key":"envoy-data-data-plane"},null,8,["mesh","dpp-name"])]),"envoy-clusters":n(()=>[d(ee,{"data-path":"clusters",mesh:A.dataPlane.mesh,"dpp-name":A.dataPlane.name,"query-key":"envoy-data-data-plane"},null,8,["mesh","dpp-name"])]),mtls:n(()=>[d(Ae,null,{default:n(()=>[g(G)!==null?(e(),t("ul",Ft,[(e(!0),t(m,null,O(g(G),(l,c)=>(e(),t("li",{key:c},[i("h4",null,y(l.label),1),a(),i("p",null,y(l.value),1)]))),128))])):(e(),B(g(Oe),{key:1,appearance:"danger"},{alertMessage:n(()=>[a(`
            This data plane proxy does not yet have mTLS configured —
            `),i("a",{href:`${g(P)("KUMA_DOCS_URL")}/policies/mutual-tls/?${g(P)("KUMA_UTM_QUERY_PARAMS")}`,class:"external-link",target:"_blank"},`
              Learn About Certificates in `+y(g(P)("KUMA_PRODUCT_NAME")),9,Jt)]),_:1}))]),_:1})]),warnings:n(()=>[d(Fe,{warnings:h.value},null,8,["warnings"])]),_:1},8,["tabs"]))}});const Xt=S(Wt,[["__scopeId","data-v-681859bd"]]),Vt={class:"component-frame"},ba=L({__name:"DataPlaneDetailView",setup(A){const o=Ce(),P=F(),w=_(null),T=_(null),h=_(!0),f=_(null);async function r(){f.value=null,h.value=!0;const D=o.params.mesh,s=o.params.dataPlane;try{w.value=await K.getDataplaneFromMesh({mesh:D,name:s}),T.value=await K.getDataplaneOverviewFromMesh({mesh:D,name:s})}catch(v){w.value=null,v instanceof Error?f.value=v:console.error(v)}finally{h.value=!1}}return te(()=>o.params.mesh,function(){o.name==="data-plane-detail-view"&&r()}),te(()=>o.params.dataPlane,function(){o.name==="data-plane-detail-view"&&r()}),r(),P.dispatch("updatePageTitle",o.params.dataPlane),(D,s)=>(e(),t("div",Vt,[h.value?(e(),B(be,{key:0})):f.value!==null?(e(),B(De,{key:1,error:f.value},null,8,["error"])):w.value===null||T.value===null?(e(),B(Te,{key:2})):(e(),B(Xt,{key:3,"data-plane":w.value,"data-plane-overview":T.value},null,8,["data-plane","data-plane-overview"]))]))}});export{ba as default};

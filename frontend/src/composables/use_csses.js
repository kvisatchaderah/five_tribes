const use_csses = (props) => {
  return Object.keys(props).reduce((css_params, prop_key) => {
    if (props[prop_key] === true) {
      css_params[prop_key] = 'true'
      return css_params
    }

    css_params[prop_key] = props[prop_key]
    return css_params
  }, {})
}

export default use_csses

import React from 'react'
import useForm from 'react-hook-form'

const Fields = (props) => {
    const { register, handleSubmit, errors } = useForm()
    var countries = props.countries.map((item, key) => {
        return <option name={item.name} key={item.name}>{item.name}</option>
    })
    return (
        <form className="form" onSubmit={handleSubmit(props.submit)}>
            <div className="d-flex">
                <div className="form-group flex-1 mr-5">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" id="firstname" name="firstName" ref={register({ required: true })} />
                    {errors.firstName && <span>This field is required</span>}
                </div>
                <div className="form-group flex-1 ml-5">
                    <label htmlFor="lastname">Last name</label>
                    <input type="text" id="lastname" name="lastName" ref={register({ required: true })} />
                    {errors.lastName && <span>This field is required</span>}
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" ref={register({ required: true })} />
                {errors.email && <span>This field is required</span>}
            </div>
            <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" ref={register({ required: true })} />
                {errors.company && <span>This field is required</span>}
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="phone" id="phone" name="phone" ref={register({ required: true })} />
                {errors.phone && <span>This field is required</span>}
            </div>
            <div className="form-group">
                <label htmlFor="country">Country</label>
                <select name="country" id="country" ref={register({ required: true })} >
                    {countries}
                </select>
                {errors.country && <span>This field is required</span>}
            </div>
            <input type="submit" value="Register now" />
        </form>
    )
}

export default Fields

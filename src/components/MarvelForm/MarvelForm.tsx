import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName, chooseDescription, chooseComics_appeared_in, chooseSuper_powers } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface HeroFormProps {
    id?:string;
    data?:{}
}

interface HeroState {
    name: string;
    description: string;
    comics_appeared_in: number;
    super_powers: string;
}

export const MarvelForm = (props:HeroFormProps) => {

    const dispatch = useDispatch();
    let { heroData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<HeroState>(state => state.name)
    const description = useSelector<HeroState>(state => state.description)
    const comics_appeared_in = useSelector<HeroState>(state => state.comics_appeared_in)
    const super_powers = useSelector<HeroState>(state => state.super_powers)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)

        if( props.id! ){
            server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            // event.target.reset();
        } else {
            // dispatch(chooseName(data.name))
            // dispatch(chooseDescription(data.description))
            // dispatch(chooseComics_appeared_in(data.comics_appeared_in))
            // dispatch(chooseSuper_powers(data.super_powers))
            server_calls.create(store.getState())
            //setTimeout(() => {window.location.reload(); }, 1000);
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Hero Name</label>
                    <Input {...register('name')} name="name" placeholder='Hero Name' />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="Description"/>
                </div>
                <div>
                    <label htmlFor="comics_appeared_in">Comics Appeared In</label>
                    <Input {...register('comics_appeared_in')} name="comics_appeared_in" placeholder="Comics Appeared In"/>
                </div>
                <div>
                    <label htmlFor="super_powers">Super Powers</label>
                    <Input {...register('super_powers')} name="super_powers" placeholder="Super Powers"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}
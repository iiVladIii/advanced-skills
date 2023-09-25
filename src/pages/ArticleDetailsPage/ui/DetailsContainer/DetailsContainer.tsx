import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';

interface DetailsContainerProps {
    className?: string;
}

export const DetailsContainer = memo((props: DetailsContainerProps) => {
    const { className } = props;

    const { id } = useParams<{ id: string }>();

    return (
        <Card
            fullWidth
            border="12"
            className={classNames('', {}, [className])}
            padding="24"
        >
            <ArticleDetails id={id} />
        </Card>
    );
});

import { AlertCircle } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

function AlertMessage({ children }) {
    <div className="h-screen flex justify-center items-center">
        <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{children}</AlertDescription>
        </Alert>
    </div>;
}

export default AlertMessage;
